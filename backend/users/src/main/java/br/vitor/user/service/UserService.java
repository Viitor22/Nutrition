package br.vitor.user.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.vitor.user.DTO.UserCreateRecordDTO;
import br.vitor.user.DTO.UserUpdateRecordDTO;
import br.vitor.user.entity.User;
import br.vitor.user.producers.UserProducer;
import br.vitor.user.repository.UserRepository;

@Service
public class UserService {
    final UserRepository userRepository;
    final UserProducer userProducer;
    final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, UserProducer userProducer, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.userProducer = userProducer;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public User createUser(UserCreateRecordDTO userDTO) {
        String encodedPassword = passwordEncoder.encode(userDTO.senha());
        User newUser = new User(userDTO.nome(), userDTO.email(), encodedPassword);
        User savedUser = userRepository.save(newUser);
        userProducer.publishMessageEmail(savedUser);
        System.out.println(savedUser);
        return savedUser;
    }

    public List<User> listUser() {
        Sort sort = Sort.by("nome").ascending();
        return userRepository.findAll(sort);
    }

    @Transactional
    public User updateUser(UUID id, UserUpdateRecordDTO userDTO) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado com id: " + id));

        if (userDTO.nome() != null) user.setNome(userDTO.nome());
        if (userDTO.email() != null) user.setEmail(userDTO.email());

        return userRepository.save(user);
    }

    @Transactional
    public void deleteUser(UUID id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("Usuário não encontrado com id: " + id);
        }
        userRepository.deleteById(id);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public boolean checkPassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }

    @Transactional
    public User findOrCreateOauthUser(String email, String nome) {
        if (email == null) {
            throw new RuntimeException("E-mail do provedor OAuth é nulo");
        }
        
        Optional<User> userOptional = userRepository.findByEmail(email);
        
        if (userOptional.isPresent()) {
            return userOptional.get();
        }

        User newUser = new User(nome, email, "OAUTH2_USER_NO_PASSWORD"); 
        User savedUser = userRepository.save(newUser);
        
        userProducer.publishMessageEmail(savedUser);
        
        return savedUser;
    }
}