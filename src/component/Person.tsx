import { PersonProps } from "./Person.type";
import React from "react";

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}{" "}
    </div>
  );
};

export default Person;
