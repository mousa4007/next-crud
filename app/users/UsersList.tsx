import { getUsers } from "@/actions/user";
import React from "react";
import DeleteUserForm from "./DeleteUserForm";

const UsersList = async () => {
  const users = await getUsers();

  return (
    <>
      {users?.map((user, index) => (
        <div key={index} className="flex justify-between p-2 border-b-2 mt-3">
          <h1> {user.name}</h1>
          <h1> {user.email}</h1>
          <DeleteUserForm id={user._id.toString()} />
        </div>
      ))}
    </>
  );
};

export default UsersList;
