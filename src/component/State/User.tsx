import React from "react";
import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogIn = () => {
    setUser({
      name: "Adegbite",
      email: "adegbite@gmail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogIn}></button>
      <button onClick={handleLogOut}></button>
      <div>User Name Is {user?.name}</div>
      <div>User Email Is {user?.email}</div>
    </div>
  );
};

export default User;
