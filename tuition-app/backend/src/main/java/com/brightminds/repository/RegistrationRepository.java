package com.brightminds.repository;

import com.brightminds.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    boolean existsByPhone(String phone);
}
