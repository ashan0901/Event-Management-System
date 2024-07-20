package com.example.eventmanagement.controller;

import com.example.eventmanagement.entity.Attendee;
import com.example.eventmanagement.entity.Event;
import com.example.eventmanagement.repository.AttendeeRepository;
import com.example.eventmanagement.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/attendees")
public class AttendeeController {
    @Autowired
    private AttendeeRepository attendeeRepository;

    @Autowired
    private EventRepository eventRepository;

    @GetMapping
    public List<Attendee> getAllAttendees() {
        return attendeeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<Attendee>> getAttendeeById(@PathVariable Long id) {
        Optional<Event> eventOptional =eventRepository.findById(id);

        if(!eventOptional.isPresent()){
            return ResponseEntity.notFound().build();
        }

        List<Attendee> attendees = attendeeRepository.findByEventId(id);
        return ResponseEntity.ok(attendees);
    }

    @PostMapping("/register/{eventId}")
    public ResponseEntity<Attendee> registerAttendee(@PathVariable Long eventId, @RequestBody Attendee attendeeDetails) {
        Optional<Event> eventOptional = eventRepository.findById(eventId);

        if (!eventOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        attendeeDetails.setEvent(eventOptional.get());
        Attendee newAttendee = attendeeRepository.save(attendeeDetails);
        return ResponseEntity.ok(newAttendee);
    }

}
