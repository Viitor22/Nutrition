package br.vitor.user.service;

import br.vitor.user.entity.User;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class OAuth2Service {

    private final GoogleIdTokenVerifier googleVerifier;
    private final UserService userService;

    public OAuth2Service(UserService userService, @Value("${google.client-id}") String googleClientId) {
        this.userService = userService;
        this.googleVerifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), new GsonFactory())
                .setAudience(Collections.singletonList(googleClientId))
                .build();
    }

    public User validateGoogleToken(String idTokenString) throws Exception {
        GoogleIdToken idToken = googleVerifier.verify(idTokenString);
        if (idToken == null) {
            throw new IllegalArgumentException("Token do Google inválido");
        }

        GoogleIdToken.Payload payload = idToken.getPayload();
        
        String email = payload.getEmail();
        String name = (String) payload.get("name");

        return userService.findOrCreateOauthUser(email, name);
    }
}