package com.brightminds.controller;

import com.brightminds.model.TimetableSlot;
import com.brightminds.service.TimetableService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/timetable")
@RequiredArgsConstructor
public class TimetableController {

    private final TimetableService timetableService;

    @GetMapping
    public ResponseEntity<List<TimetableSlot>> getAll() {
        return ResponseEntity.ok(timetableService.getAll());
    }
}
