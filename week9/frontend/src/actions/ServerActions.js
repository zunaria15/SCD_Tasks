"use server";

export async function createTodo(title, description) {
  try {
    const res = await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (!res.ok) {
      throw new Error("Failed to create todo");
    }

    return await res.json();
  } catch (error) {
    console.error("Server Action Error:", error);
    throw error;
  }
}