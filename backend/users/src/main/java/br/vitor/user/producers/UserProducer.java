package br.vitor.user.producers;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import br.vitor.user.DTO.EmailDTO;
import br.vitor.user.entity.User;

@Component
public class UserProducer {

    final RabbitTemplate rabbitTemplate;

    public UserProducer(RabbitTemplate rabbitTemplate){
        this.rabbitTemplate = rabbitTemplate;
    }

    @Value(value = "${broker.queue.user.name}")
    private String routingKey;

    public void publishMessageEmail(User user){
        var emailDTO = new EmailDTO();
        emailDTO.setUserId(user.getId());
        emailDTO.setEmailTo(user.getEmail());
        emailDTO.setSubject("Bem vindo à família NutriVida!");
        emailDTO.setText("Oi, " + user.getNome() + " sua conta foi cadastrada no NutriVida com sucesso!\n Aproveite ao máximo nossas funcionalidades únicas.");
    
        rabbitTemplate.convertAndSend("", routingKey, emailDTO);
    }
}
