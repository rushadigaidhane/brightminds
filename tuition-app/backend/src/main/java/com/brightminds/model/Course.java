package com.brightminds.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Table(name = "courses")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String category;     // "school" | "jee" | "neet" | "maths"

    private String badge;        // display label e.g. "Class 10"
    private String badgeColor;   // "blue" | "green" | "amber" | "rose"

    @NotBlank
    private String description;

    private String subjects;     // comma-separated
    private String duration;
    private String maxStudents;

    @NotNull
    private Double feePerMonth;

    private String icon;         // emoji
}
