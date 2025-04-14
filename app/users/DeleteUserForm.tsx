"use client";

import React from "react";

import { deleteUser } from "@/actions/user";
import { ActionButton } from "./ActionButton";
import toast from "react-hot-toast";

function DeleteUserForm({ id }: { id: string }) {
  const handleDelete = async (formData: FormData) => {
    try {
      await deleteUser(formData);
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete user");
      console.error("Delete error:", error);
    }
  };

  return (
    <div>
      <form action={handleDelete}>
        <input type="text" hidden name="id" defaultValue={id} />
        <ActionButton title="delete" />
      </form>
    </div>
  );
}

export default DeleteUserForm;
