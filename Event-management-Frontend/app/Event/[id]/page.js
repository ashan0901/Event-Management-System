"use client";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Eventpage({ params, fetchEvents }) {
  const [attendees, setAttendees] = useState([]);
  const [event, setEvent] = useState([]);

  const fetchAttendees = async (id) => {
    const response = await axios.get(
      `http://localhost:8080/api/attendees/${id}`
    );
    setAttendees(response.data);
    console.log(response.data);
  };

  const fetchEvent = async (id) => {
    const response = await axios.get(`http://localhost:8080/api/events/${id}`);
    setEvent(response.data);
  };

  useEffect(() => {
    fetchAttendees(params.id);
    fetchEvent(params.id);
  }, []);

  return (
    <div>
      <div className="mt-14 font-bold mt-4">
        <div className="mb-10 font-serif text-white text-5xl text-center">
          <h1>Attendence List</h1>
        </div>

        <div className="mb-10 font-serif text-white text-3xl text-center">
          <p>{event.name}</p>
          <p className="text-xl">Attendees: {attendees.length}</p>
        </div>

        <div className="flex flex-wrap font-serif text-white text-lg justify-center mt-5 w-full">
          {attendees.map((attendee) => (
            <div
              key={attendee.id}
              className=" mt-5 bg-blue-900 text-white rounded-3xl p-5 shadow-xl w-[350px] mr-5"
            >
              <p>Name : {attendee.name}</p>
              <p>Email : {attendee.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eventpage;
