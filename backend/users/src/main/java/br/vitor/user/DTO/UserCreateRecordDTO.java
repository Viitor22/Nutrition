package br.vitor.user.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserCreateRecordDTO(
    @NotBlank String nome,
    @NotBlank String senha,
    @Email @NotBlank String email
    ) {

}
