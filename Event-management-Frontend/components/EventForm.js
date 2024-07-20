import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const EventForm = ({ fetchEvents }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/events", {
      name,
      description,
      date,
      location,
    });
    router.push("/");
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
          placeholder="Event Name"
          required
        />
        <br />
        <textarea
          className="border-2 border-gray-300 rounded-lg p-2 w-full mb-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        ></textarea>
        <br />
        <input
          className="border-2 border-gray-300 rounded-lg p-2 w-full mb-3"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <input
          className="border-2 border-gray-300 rounded-lg p-2 w-full mb-5"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <br />
        <button
          className="bg-slate-100 p-3 rounded-xl shadow-xl hover:bg-purple-500"
          type="submit"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
