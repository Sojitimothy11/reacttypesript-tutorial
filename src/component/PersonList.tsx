import { Name } from "./Person.type";
import React from "react";

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((names) => (
        <div key={names.id}>
          {names.id} {names.firstName} {names.lastName}
        </div>
      ))}
      <button onClick={() => console.log("Button clicked!")}>Click me!</button>
      <input type="text" placeholder="Search..." />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {props.names.map((names) => (
            <tr key={names.id}>
              <td>{names.id}</td>
              <td>{names.firstName}</td>
              <td>{names.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Welcome</h2>
    </div>
  );
};

export default PersonList;
