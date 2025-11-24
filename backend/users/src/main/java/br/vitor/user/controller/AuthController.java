package br.vitor.user.controller;

import br.vitor.user.DTO.GoogleTokenDTO;
import br.vitor.user.DTO.LoginRequest;
import br.vitor.user.DTO.LoginResponse;
import br.vitor.user.DTO.UserCreateRecordDTO;
import br.vitor.user.entity.User;
import br.vitor.user.security.JwtService;
import br.vitor.user.service.OAuth2Service;
import br.vitor.user.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;
    private final JwtService jwtService;
    private final OAuth2Service oauth2Service;

    public AuthController(UserService userService, JwtService jwtService, OAuth2Service oauth2Service) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.oauth2Service = oauth2Service;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody @Valid UserCreateRecordDTO dto) {
        var created = userService.createUser(dto);
        return ResponseEntity.status(201).body(created);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequest loginRequest) {
        var userOpt = userService.findByEmail(loginRequest.email());
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(401).body("Credenciais inválidas");
        }
        var user = userOpt.get();

        if (!userService.checkPassword(loginRequest.senha(), user.getSenha())) {
            return ResponseEntity.status(401).body("Credenciais inválidas");
        }

        String token = jwtService.generateToken(user.getEmail());
        return ResponseEntity.ok(new LoginResponse(token, "Bearer"));
    }

    @PostMapping("/google")
    public ResponseEntity<LoginResponse> loginWithGoogle(@RequestBody GoogleTokenDTO googleToken) {
        try {
            User user = oauth2Service.validateGoogleToken(googleToken.token());
            String jwt = jwtService.generateToken(user.getEmail());
            return ResponseEntity.ok(new LoginResponse(jwt, "Bearer"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(null);
        }
    }
}