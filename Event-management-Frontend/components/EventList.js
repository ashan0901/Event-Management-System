import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EventList = ({ events, fetchEvents }) => {
  const [name, setName] = useState("");
  const route = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = async (id) => {
    route.push(`/Add-Attendee/${id}`);
  };

  const goToeventpage = (id) => {
    route.push(`/Event/${id}`, fetchEvents);
  };

  return (
    <div className="bg-slate-900 p-10 rounded-2xl text-blue-800 m-10 w-full">
      <h1 className="font-serif text-white text-3xl text-center mb-10 font-bold mt-4">
        Events
      </h1>
      <div>
        <div className="flex flex-wrap justify-center mt-5 w-full">
          {events.map((event) => (
            <div
              key={event.id}
              className=" mt-5 bg-blue-900 text-white rounded-3xl p-10 shadow-xl w-[400px] mr-5"
            >
              <h1 className="text-2xl mb-4 bg-blue-500 text-center rounded-3xl p-2">
                {event.name}
              </h1>
              <p>{event.description}</p>
              <p>Data : {event.date}</p>
              <p>venue : {event.location}</p>

              <button
                className="mt-3 conz bg-slate-100 p-2 rounded-xl text-black shadow-xl hover:bg-purple-500 w-20"
                onClick={() => handleDelete(event.id)}
              >
                Delete
              </button>

              <button className="ml-5 mt-3 conz bg-slate-100 p-2 rounded-xl text-black shadow-xl hover:bg-purple-500 w-20">
                Edit
              </button>

              <button
                className="mt-3 ml-5 conz bg-slate-100 p-2 rounded-xl text-black shadow-xl hover:bg-purple-500 w-20"
                onClick={() => handleRegister(event.id)}
              >
                Register
              </button>
              <br></br>
              <button
                className="mt-4 ml-36 conz bg-slate-100 p-2 rounded-xl text-black shadow-xl hover:bg-purple-500 w-40"
                onClick={() => goToeventpage(event.id)}
              >
                Go to Evnet
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
