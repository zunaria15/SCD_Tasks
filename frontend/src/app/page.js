import React from "react";
import AddDialog from '@/components/custom/AddDialog';
import { getTodos } from "@/actions/ServerActions";
import ActionButtons from "@/components/custom/ActionButtons";

export default async function Page() {
  const todos = await getTodos();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center mb-8 px-2">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Todo Dashboard</h1>
          <AddDialog />
        </div>

        <div className="bg-white border rounded-xl shadow-sm overflow-hidden w-full">
          <table className="w-full text-left table-auto">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-4 font-semibold text-gray-700 w-[10%]">Id</th>
                <th className="p-4 font-semibold text-gray-700 w-[25%]">Title</th>
                <th className="p-4 font-semibold text-gray-700 w-[45%]">Description</th>
                <th className="p-4 font-semibold text-gray-700 text-right w-[20%]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {todos.length > 0 ? (
                todos.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-500">{index + 1}</td>
                    <td className="p-4 font-medium text-gray-900 capitalize">{item.title}</td>
                    <td className="p-4 text-gray-600 break-words">{item.description}</td>
                    <td className="p-4 text-right">
                      <ActionButtons item={item} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-12 text-center text-gray-400">No records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}