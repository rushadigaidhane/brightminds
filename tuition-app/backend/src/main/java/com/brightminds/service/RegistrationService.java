package com.brightminds.service;

import com.brightminds.model.Registration;
import com.brightminds.repository.RegistrationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RegistrationService {

    private final RegistrationRepository registrationRepository;

    public Registration register(Registration registration) {
        registration.setStatus("PENDING");
        return registrationRepository.save(registration);
    }

    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    public Registration getById(Long id) {
        return registrationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Registration not found: " + id));
    }

    public Registration updateStatus(Long id, String status) {
        Registration r = getById(id);
        r.setStatus(status);
        return registrationRepository.save(r);
    }
}
