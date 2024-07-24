import React from "react";

type Greetprops = {
  name: string;
  age: number;
  isLoggedIn: boolean;
  handleClick: () => void;
  children: React.ReactNode;
  errorMessage?: string;
  isLoading?: boolean;
};

const Greet = (props: Greetprops) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Greetings to {props.name}, {props.age}.`
          : "Welcome"}
      </h2>
    </div>
  );
};

export default Greet;
