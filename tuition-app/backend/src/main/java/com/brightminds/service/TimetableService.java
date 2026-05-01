package com.brightminds.service;

import com.brightminds.model.TimetableSlot;
import com.brightminds.repository.TimetableRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TimetableService {

    private final TimetableRepository timetableRepository;

    @PostConstruct
    public void seed() {
        if (timetableRepository.count() > 0) return;

        timetableRepository.saveAll(List.of(
            TimetableSlot.builder().sortOrder(1).timeSlot("6:00 – 8:00 AM")
                .monday("JEE – Physics").mondayType("jee")
                .tuesday("JEE – Chemistry").tuesdayType("jee")
                .wednesday("JEE – Maths").wednesdayType("jee")
                .thursday("JEE – Physics").thursdayType("jee")
                .friday("JEE – Revision").fridayType("jee")
                .saturday("JEE – Mock Test").saturdayType("jee").build(),

            TimetableSlot.builder().sortOrder(2).timeSlot("8:00 – 10:00 AM")
                .monday("NEET – Biology").mondayType("neet")
                .tuesday("NEET – Chemistry").tuesdayType("neet")
                .wednesday("NEET – Physics").wednesdayType("neet")
                .thursday("NEET – Biology").thursdayType("neet")
                .friday("NEET – Revision").fridayType("neet")
                .saturday("NEET – Mock Test").saturdayType("neet").build(),

            TimetableSlot.builder().sortOrder(3).timeSlot("10:00 AM – 12:00 PM")
                .monday("Cls 12 – Maths").mondayType("math")
                .tuesday("Cls 12 – Physics").tuesdayType("sci")
                .wednesday("Cls 12 – Maths").wednesdayType("math")
                .thursday("Cls 12 – Chemistry").thursdayType("sci")
                .friday("Cls 12 – Test").fridayType("math")
                .saturday("Cls 12 – Doubt").saturdayType("sci").build(),

            TimetableSlot.builder().sortOrder(4).timeSlot("12:00 – 2:00 PM")
                .monday("— Break —").mondayType("empty")
                .tuesday("— Break —").tuesdayType("empty")
                .wednesday("— Break —").wednesdayType("empty")
                .thursday("— Break —").thursdayType("empty")
                .friday("— Break —").fridayType("empty")
                .saturday("Cls 10 – Test").saturdayType("math").build(),

            TimetableSlot.builder().sortOrder(5).timeSlot("2:00 – 4:00 PM")
                .monday("Cls 10 – Maths").mondayType("math")
                .tuesday("Cls 10 – Science").tuesdayType("sci")
                .wednesday("Cls 10 – Maths").wednesdayType("math")
                .thursday("Cls 10 – Science").thursdayType("sci")
                .friday("Cls 10 – Revision").fridayType("math")
                .saturday("Holiday").saturdayType("empty").build(),

            TimetableSlot.builder().sortOrder(6).timeSlot("4:00 – 6:00 PM")
                .monday("Cls 9 – Maths").mondayType("eng")
                .tuesday("Cls 9 – Science").tuesdayType("sci")
                .wednesday("Cls 9 – Maths").wednesdayType("eng")
                .thursday("Cls 9 – Science").thursdayType("sci")
                .friday("Cls 9 – Doubt").fridayType("eng")
                .saturday("Holiday").saturdayType("empty").build(),

            TimetableSlot.builder().sortOrder(7).timeSlot("6:00 – 8:00 PM")
                .monday("Cls 11 – Maths").mondayType("math")
                .tuesday("Cls 11 – Physics").tuesdayType("sci")
                .wednesday("Cls 11 – Maths").wednesdayType("math")
                .thursday("Cls 11 – Chemistry").thursdayType("sci")
                .friday("Cls 11 – Test").fridayType("math")
                .saturday("Holiday").saturdayType("empty").build()
        ));
    }

    public List<TimetableSlot> getAll() {
        return timetableRepository.findAllByOrderBySortOrderAsc();
    }
}
