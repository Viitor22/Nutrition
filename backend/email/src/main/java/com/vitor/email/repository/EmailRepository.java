package com.vitor.email.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vitor.email.entity.Email;

public interface EmailRepository extends JpaRepository<Email, UUID>{

}
