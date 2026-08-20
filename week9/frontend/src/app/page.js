import React from "react";
import AddDialog from "@/components/custom/AddDialog";

async function Page() {
  const response = await fetch("http://localhost:3000/todo");
  const res = await response.json();

  return (
    <div>
      <AddDialog />
      {res.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;
