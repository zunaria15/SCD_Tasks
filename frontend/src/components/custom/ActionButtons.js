"use client";
import { useState } from "react";
import { deleteTodo, updateTodo } from "@/actions/ServerActions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function ActionButtons({ item }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await updateTodo(item.id, title, description);
    setLoading(false);
    setOpenEdit(false);
  };

  const confirmDelete = async () => {
    setLoading(true);
    await deleteTodo(item.id);
    setLoading(false);
    setOpenDelete(false);
  };

  return (
    <div className="flex justify-end gap-3">
      {/* EDIT DIALOG */}
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogTrigger className="px-4 py-1.5 hover:bg-blue-50 text-blue-600 rounded-lg border border-blue-100 text-sm font-medium">
          Edit
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Edit Task</DialogTitle>
            <DialogDescription>Update your task details.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4 pt-4" onSubmit={handleEditSubmit}>
            <input className="w-full border p-2.5 rounded-lg outline-none" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea className="w-full border p-2.5 rounded-lg outline-none" rows={4} value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2.5 rounded-lg">
              {loading ? "Updating..." : "Update Task"}
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* DELETE DIALOG (Minimal) */}
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogTrigger className="px-4 py-1.5 hover:bg-red-50 text-red-600 rounded-lg border border-red-100 text-sm font-medium">
          Delete
        </DialogTrigger>
        <DialogContent className="sm:max-w-[350px] p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-center">Are you sure you want to delete?</DialogTitle>
            <DialogDescription className="hidden" />
          </DialogHeader>
          <DialogFooter className="flex flex-row justify-center gap-4 mt-4 sm:justify-center">
            <button onClick={() => setOpenDelete(false)} className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">No</button>
            <button onClick={confirmDelete} disabled={loading} className="px-6 py-2 bg-red-600 text-white rounded-lg text-sm">
              {loading ? "..." : "Yes"}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}