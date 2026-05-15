"use client";
import { useState } from "react";
import { createTodo } from "@/actions/ServerActions";

export default function AddDialogForm({ onSuccess }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await createTodo(title, description);
    setTitle("");
    setDescription("");
    setLoading(false);
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <input required className="w-full border p-2.5 rounded-lg outline-none" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea required className="w-full border p-2.5 rounded-lg outline-none" placeholder="Enter Description" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
      <button disabled={loading} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg">
        {loading ? "Processing..." : "Submit Task"}
      </button>
    </form>
  );
}