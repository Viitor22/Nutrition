package br.vitor.user.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;
import br.vitor.user.entity.User;

public interface UserRepository extends MongoRepository<User, UUID> {
    Optional<User> findByEmail(String email);
}
