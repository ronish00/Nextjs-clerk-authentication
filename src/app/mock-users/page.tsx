import { revalidatePath } from "next/cache";
import {auth, currentUser} from "@clerk/nextjs/server"

type MockUser = {
    id: number;
    name: string;
};

export default async function MockUsers() {

  const authObj = await auth();
  const userObj = await currentUser();

  console.log({
    authObj,
    userObj
  });

  const response = await fetch("https://674efea8bb559617b26d94bc.mockapi.io/users");
  const users = await response.json();

  async function addUser(formData: FormData){
    "use server";
    const name = formData.get("name")
    const res = await fetch("https://674efea8bb559617b26d94bc.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name})
    })
    const newUser = await res.json();
    revalidatePath("/mock-users")
    console.log(newUser)
  }

  return (
    <div className="py-10">
      <form action={addUser}>
        <input type="text" name="name" className="text-black" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
      </form>
      <ul className="space-y-4 p-4">
        {users.map((user: MockUser) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.id}: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}