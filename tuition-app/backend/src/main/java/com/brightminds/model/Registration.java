package com.brightminds.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "registrations")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Student name is required")
    private String studentName;

    @NotBlank(message = "Parent name is required")
    private String parentName;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[6-9]\\d{9}$", message = "Enter valid 10-digit Indian phone number")
    private String phone;

    private String email;

    @NotBlank(message = "Class is required")
    private String studentClass;

    private String board;       // CBSE / SSC / ICSE

    @NotBlank(message = "Course is required")
    private String course;

    @NotBlank(message = "Preferred batch time is required")
    private String batchTime;

    private String status;      // "PENDING" | "CONFIRMED" | "CANCELLED"

    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();
}
