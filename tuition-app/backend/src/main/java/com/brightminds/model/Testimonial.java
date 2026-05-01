package com.brightminds.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "testimonials")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Testimonial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String detail;      // e.g. "Class 12 — Scored 95%"
    private String review;
    private int rating;         // 1–5
    private String avatarColor; // CSS gradient string
    private String initials;
}
