"use client";

import UsersData from "@/components/users-data";
import { db } from "@/firebase/firebaseconfig";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function AllUsers() {
  const [users, setUsers] = useState<DocumentData[]>([]);
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async () => {
    const userRef = collection(db, "users");
    let usersSnapshot = await getDocs(userRef);

    let users = usersSnapshot.docs.map((user) => ({ ...user.data() }));
    setUsers(users);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>User Type</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map(({ name, email, role, pic, logo }) => (
              <UsersData
                name={name}
                email={email}
                role={role}
                pic={pic}
                logo={logo}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}
