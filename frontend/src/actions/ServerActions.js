"use server";
import { revalidatePath } from "next/cache";

const API_URL = "http://localhost:3001/todo"; 

// --- FETCH DATA ---
export async function getTodos() {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}

// --- CREATE ---
export async function createTodo(title, description) {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    revalidatePath("/");
  } catch (err) {
    console.error("Create Error:", err);
  }
}

// --- UPDATE ---
export async function updateTodo(id, title, description) {
  try {
    await fetch(`${API_URL}/${Number(id)}`, {
      method: "PUT", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    revalidatePath("/");
  } catch (err) {
    console.error("Update Error:", err);
  }
}

// --- DELETE ---
export async function deleteTodo(id) {
  try {
    await fetch(`${API_URL}/${Number(id)}`, {
      method: "DELETE",
    });
    revalidatePath("/");
  } catch (err) {
    console.error("Delete Error:", err);
  }
}