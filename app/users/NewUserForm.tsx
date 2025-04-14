"use client";
import { createNewUser } from "@/actions/user";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { ActionButton } from "./ActionButton";
import toast from "react-hot-toast";

function NewUserForm() {
  const handleCreateUser = async (formData: FormData) => {
    const response = await createNewUser(formData);
    if (response?.error) {
      toast.error(response.error.toString());
    } else {
      toast.success("success");
    }
  };
  return (
    <>
      <form action={handleCreateUser} className="flex flex-col gap-5">
        <h1 className="font-extrabold">User Registeration</h1>
        <Label>Your Name</Label>
        <Input required type="text" name="name" />
        <Label>Your Email</Label>
        <Input required type="email" name="email" />
        {/* <Button type="submit">Submit</Button> */}
        <ActionButton title="Create User" />
      </form>
    </>
  );
}

export default NewUserForm;
