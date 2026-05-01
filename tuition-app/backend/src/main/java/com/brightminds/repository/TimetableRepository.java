package com.brightminds.repository;

import com.brightminds.model.TimetableSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TimetableRepository extends JpaRepository<TimetableSlot, Long> {
    List<TimetableSlot> findAllByOrderBySortOrderAsc();
}
