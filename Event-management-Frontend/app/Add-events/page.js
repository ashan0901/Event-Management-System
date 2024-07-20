"use client";

import EventForm from "@/components/EventForm";
import React from "react";

const AddEventPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="mt-5 bg-blue-800 rounded-3xl p-10 shadow-xl w-[800px]">
        <h2 className="text-grey-500 font-serif font-bold text-3xl text-center bg-slate-100 rounded-3xl p-5 ml-10 mr-10">
          Add Event
        </h2>
        <EventForm />
      </div>
    </div>
  );
};

export default AddEventPage;
