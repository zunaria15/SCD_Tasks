"use client";
import { createTodo } from "@/actions/ServerActions";
import { useState } from "react";


export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createTodo(title, description);
      console.log("Response:", data);

      setTitle("");
      setDescription("");

      alert("Todo added!");
    } catch (error) {
      console.error(error);
      alert("Error adding todo");
    }
  };

  return (
    <div>
      <h1>Create Todo</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}