// src/app/page.js (or your main page)
"use client";
import React from "react";

import { events } from "@/components/Data";
import Card from "@/components/Card";

function Page() {
  console.log("events:", events); // will show array in browser console

  return (
    <div className=" w-[80%]  mx-auto mt-12  ">
      {events.map((i) => (
        <Card
          key={i.id}
          id={i.id}
          image={i.image}
          title={i.title}
          date={i.date}
          address={i.address}
        />
      ))}
    </div>
  );
}

export default Page;