package br.vitor.user.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import br.vitor.user.DTO.UserUpdateRecordDTO;
import br.vitor.user.entity.User;
import br.vitor.user.service.UserService;

@RestController
@RequestMapping("users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/me")
    public ResponseEntity<User> getMyProfile(@AuthenticationPrincipal User currentUser) {
        return ResponseEntity.ok(currentUser);
    }
    
    // Renomeado de create para register (para bater com o AuthController)
    // @PostMapping
    // ResponseEntity<User> create(@RequestBody @Valid UserCreateRecordDTO userRecordDTO) { ... }
    // NOTA: A criação de usuário já está no AuthController (@PostMapping("/register")),
    // é melhor manter lá. Se você quiser um endpoint admin para criar usuários,
    // mantenha este, mas o /auth/register é o correto para o público.

    @GetMapping
    ResponseEntity<List<User>> list() {
        var users = userService.listUser();
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

    @PutMapping("/{id}") 
    ResponseEntity<User> update(@PathVariable UUID id, @RequestBody UserUpdateRecordDTO userRecordDTO) {
        var users = userService.updateUser(id, userRecordDTO);
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

    @DeleteMapping("/{id}") 
    ResponseEntity<Void> delete(@PathVariable UUID id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}