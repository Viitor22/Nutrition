package com.vitor.email.consumers;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

import com.vitor.email.emailRecordDTO.EmailRecordDTO;
import com.vitor.email.entity.Email;
import com.vitor.email.service.EmailService;



@Component
public class EmailConsumer {

    @Autowired
    EmailService emailService;

    @RabbitListener(queues = "${broker.queue.user.name}")
    public void listenEmailQueue(@Payload EmailRecordDTO emailRecordDTO) {
        var email = new Email();
        BeanUtils.copyProperties(emailRecordDTO, email);

        emailService.sendEmail(email);
        System.err.println("Email enviado com sucesso!");
    }
}
