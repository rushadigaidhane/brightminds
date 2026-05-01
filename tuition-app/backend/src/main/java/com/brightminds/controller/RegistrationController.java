package com.brightminds.controller;

import com.brightminds.model.Registration;
import com.brightminds.service.RegistrationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/registrations")
@RequiredArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    // POST /api/registrations  — submit enrollment form
    @PostMapping
    public ResponseEntity<Map<String, Object>> register(
            @Valid @RequestBody Registration registration) {

        Registration saved = registrationService.register(registration);
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("success", true);
        response.put("message", "Registration submitted successfully! We will call you within 24 hours.");
        response.put("registrationId", saved.getId());
        response.put("status", saved.getStatus());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // GET /api/registrations  — list all (admin)
    @GetMapping
    public ResponseEntity<List<Registration>> getAll() {
        return ResponseEntity.ok(registrationService.getAllRegistrations());
    }

    // GET /api/registrations/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Registration> getById(@PathVariable Long id) {
        return ResponseEntity.ok(registrationService.getById(id));
    }
}
