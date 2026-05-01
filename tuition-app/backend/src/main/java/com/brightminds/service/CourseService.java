package com.brightminds.service;

import com.brightminds.model.Course;
import com.brightminds.repository.CourseRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;

    @PostConstruct
    public void seedCourses() {
        if (courseRepository.count() > 0) return;

        courseRepository.saveAll(List.of(
            Course.builder().name("Class 8 Foundation").category("school")
                .badge("School").badgeColor("blue").icon("🏫")
                .description("Strong fundamentals in Maths & Science. Weekly tests and doubt clearing.")
                .subjects("Maths, Science").duration("10 months").maxStudents("15").feePerMonth(2000.0).build(),

            Course.builder().name("Class 9 Science & Maths").category("school")
                .badge("School").badgeColor("blue").icon("🏫")
                .description("CBSE-aligned deep dive into Physics, Chemistry, Biology and Mathematics.")
                .subjects("PCM + Bio").duration("10 months").maxStudents("15").feePerMonth(2200.0).build(),

            Course.builder().name("Class 10 — Board Prep").category("school")
                .badge("Board").badgeColor("green").icon("🏫")
                .description("Complete CBSE/SSC board prep with exam strategy and full mock tests.")
                .subjects("Maths, Science").duration("10 months").maxStudents("15").feePerMonth(2500.0).build(),

            Course.builder().name("Class 11 PCM / PCB").category("school")
                .badge("Board").badgeColor("amber").icon("🏫")
                .description("Build a rock-solid foundation in Class 11 for Class 12 performance.")
                .subjects("PCM or PCB").duration("10 months").maxStudents("12").feePerMonth(3000.0).build(),

            Course.builder().name("Class 12 PCM / PCB").category("school")
                .badge("Board").badgeColor("green").icon("🏫")
                .description("Board mastery + entrance foundation. PYQ analysis, revision and mocks.")
                .subjects("PCM or PCB").duration("12 months").maxStudents("12").feePerMonth(3500.0).build(),

            Course.builder().name("JEE Mains Preparation").category("jee")
                .badge("JEE").badgeColor("amber").icon("🏆")
                .description("Topic-wise coaching, NTA pattern mocks and 300+ hours of problem solving.")
                .subjects("Physics, Chemistry, Maths").duration("12 months").maxStudents("10").feePerMonth(4500.0).build(),

            Course.builder().name("JEE Advanced (IIT)").category("jee")
                .badge("JEE").badgeColor("rose").icon("🏆")
                .description("Elite program for IIT aspirants. Advanced problem sets, Olympiad techniques.")
                .subjects("Physics, Chemistry, Maths").duration("18 months").maxStudents("8").feePerMonth(5500.0).build(),

            Course.builder().name("NEET UG Preparation").category("neet")
                .badge("NEET").badgeColor("rose").icon("🏆")
                .description("NCERT mastery + NEET-pattern mocks with diagram-based Biology learning.")
                .subjects("Physics, Chemistry, Biology").duration("18 months").maxStudents("10").feePerMonth(5000.0).build(),

            Course.builder().name("Maths Mastery Program").category("maths")
                .badge("Specialist").badgeColor("blue").icon("📐")
                .description("Concept-based Maths for all levels. Builds strong logical and calculation skills.")
                .subjects("Mathematics").duration("Ongoing").maxStudents("12").feePerMonth(1800.0).build()
        ));
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public List<Course> getCoursesByCategory(String category) {
        return courseRepository.findByCategory(category);
    }

    public Course getCourseById(Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found with id: " + id));
    }
}
