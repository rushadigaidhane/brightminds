package com.brightminds.controller;

import com.brightminds.model.Course;
import com.brightminds.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    // GET /api/courses               → all courses
    // GET /api/courses?category=jee  → filtered
    @GetMapping
    public ResponseEntity<List<Course>> getCourses(
            @RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty()) {
            return ResponseEntity.ok(courseService.getCoursesByCategory(category));
        }
        return ResponseEntity.ok(courseService.getAllCourses());
    }

    // GET /api/courses/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        return ResponseEntity.ok(courseService.getCourseById(id));
    }
}
