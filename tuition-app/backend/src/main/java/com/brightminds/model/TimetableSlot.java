package com.brightminds.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "timetable")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TimetableSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String timeSlot;   // "6:00 – 8:00 AM"
    private String monday;
    private String tuesday;
    private String wednesday;
    private String thursday;
    private String friday;
    private String saturday;

    // chip color: "math" | "sci" | "eng" | "jee" | "neet" | "empty"
    private String mondayType;
    private String tuesdayType;
    private String wednesdayType;
    private String thursdayType;
    private String fridayType;
    private String saturdayType;

    private int sortOrder;
}
