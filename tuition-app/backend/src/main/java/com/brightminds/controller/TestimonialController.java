package com.brightminds.controller;

import com.brightminds.model.Testimonial;
import com.brightminds.service.TestimonialService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/testimonials")
@RequiredArgsConstructor
public class TestimonialController {

    private final TestimonialService testimonialService;

    @GetMapping
    public ResponseEntity<List<Testimonial>> getAll() {
        return ResponseEntity.ok(testimonialService.getAll());
    }
}
