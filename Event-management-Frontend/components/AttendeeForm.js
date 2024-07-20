"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AttendeeForm = ({ eventId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const route = useRouter();

  const handleSubmit = async (e) => {
    console.log(eventId);
    e.preventDefault();
    await axios.post(
      `http://localhost:8080/api/attendees/register/${eventId}`,
      {
        name,
        email,
        eventId,
      }
    );
    route.push("/");

    // fetchEvents();
  };

  return (
    <div className="ml-10 mt-10 bg-blue-900 rounded-3xl p-14 shadow-xl w-[640px]">
      <h1 className="font-serif text-white text-3xl text-center mb-10 font-bold">
        Event Form
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-300 rounded-lg p-2 w-full mb-3"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <br />

        <input
          className="border-2 border-gray-300 rounded-lg p-2 w-full mb-5"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <br />
        <button
          className="bg-slate-100 p-3 rounded-xl shadow-xl hover:bg-purple-500"
          type="submit"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default AttendeeForm;
