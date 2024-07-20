"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import EventList from "../components/EventList";
import { useRouter } from "next/navigation";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const route = useRouter();

  const fetchEvents = async () => {
    const response = await axios.get("http://localhost:8080/api/events");
    setEvents(response.data);
  };

  const fetchEvent = async (id) => {
    const response = await axios.get("http://localhost:8080/api/events/" + id);
    setEvent(response.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const goToAddEventPage = () => {
    route.push("/Add-events");
  };

  return (
    <div>
      <h1 className="font-serif text-blue-200 text-6xl text-center mt-10 font-bold">
        Event Management System
      </h1>

      <div class="flex items-center justify-center mt-10">
        <div
          onClick={() => {
            goToAddEventPage();
          }}
          className="inline-block px-5 py-5 border border-transparent w-36
               text-sm font-medium rounded-md shadow-sm text-white bg-blue-600
               hover:bg-blue-700 focus:outline-none focus:ring-2
               focus:ring-offset-2 focus:ring-blue-500 text-center"
        >
          Add Event
        </div>
      </div>

      <div className="flex flex-row">
        <div>
          <EventList
            events={events}
            event={event}
            fetchEvents={fetchEvents}
            fetchEvent={fetchEvent}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
