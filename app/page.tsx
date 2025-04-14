import NewUserForm from "./users/NewUserForm";
import UsersList from "./users/UsersList";

export default function Home() {
  return (
    <main>
      <NewUserForm />
      <hr className="mx-2" />
      <UsersList />
    </main>
  );
}
