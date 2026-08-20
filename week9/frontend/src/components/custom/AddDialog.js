import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddDialogForm from './AddDialogForm'
function AddDialog() {
  return (
    <Dialog>
  <DialogTrigger>Add Blog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Form to add blog</DialogTitle>
      <DialogDescription></DialogDescription>
    </DialogHeader>
    <AddDialogForm />           
  </DialogContent>
</Dialog>
  )
}

export default AddDialog