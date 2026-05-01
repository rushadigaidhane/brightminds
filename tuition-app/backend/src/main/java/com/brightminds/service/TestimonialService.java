package com.brightminds.service;

import com.brightminds.model.Testimonial;
import com.brightminds.repository.TestimonialRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TestimonialService {

    private final TestimonialRepository testimonialRepository;

    @PostConstruct
    public void seed() {
        if (testimonialRepository.count() > 0) return;

        testimonialRepository.saveAll(List.of(
            Testimonial.builder().name("Ananya Sharma").initials("AS")
                .detail("Class 12 — Scored 95%").rating(5)
                .avatarColor("linear-gradient(135deg,#4F46E5,#818CF8)")
                .review("BrightMinds transformed my preparation completely. The faculty explains every concept with such clarity — I scored 95% in boards!").build(),

            Testimonial.builder().name("Rohan Mehta").initials("RM")
                .detail("JEE Advanced — AIR 342").rating(5)
                .avatarColor("linear-gradient(135deg,#22C55E,#86EFAC)")
                .review("The small batch size really helped. Sir personally tracked my weak chapters every week. Cleared JEE with AIR 342 this year!").build(),

            Testimonial.builder().name("Priya Joshi").initials("PJ")
                .detail("Parent — Kavya's Mother").rating(5)
                .avatarColor("linear-gradient(135deg,#F59E0B,#FDE68A)")
                .review("As a parent I was initially skeptical but BrightMinds delivered beyond expectations. My daughter's confidence and marks both improved greatly.").build(),

            Testimonial.builder().name("Kavya Patel").initials("KP")
                .detail("NEET 2024 — AIR 178").rating(5)
                .avatarColor("linear-gradient(135deg,#E11D48,#FB7185)")
                .review("The Biology notes and weekly NEET mocks were excellent. My Biology score improved from 280 to 340 in just 3 months!").build()
        ));
    }

    public List<Testimonial> getAll() {
        return testimonialRepository.findAll();
    }
}
