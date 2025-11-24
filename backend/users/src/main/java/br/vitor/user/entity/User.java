package br.vitor.user.entity;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Collection;
import java.util.Collections; 

import org.springframework.data.mongodb.core.index.Indexed;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Document(collection = "users")
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {
    @Id
    private UUID id;
    @NotBlank
    private String nome;
    @Email
    @NotBlank
    @Indexed(unique = true)
    private String email;
    @NotBlank
    private String senha;

    

    public User (@NotBlank String nome, @Email @NotBlank String email, @NotBlank String senha) {
        this.id = UUID.randomUUID();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Por enquanto, vamos retornar uma lista vazia.
        // Mais tarde, você pode adicionar "Roles" (ex: "ROLE_ADMIN") aqui.
        return Collections.emptyList(); 
    }

    @Override
    public String getPassword() {
        return this.senha; // Retorna sua senha (hash)
    }

    @Override
    public String getUsername() {
        return this.email; // Seu "username" é o e-mail
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // (Você pode adicionar lógica para isso depois)
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
