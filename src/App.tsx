import { Box } from "./component/context/Box";
import Button from "./component/Button";
import Container from "./component/Container";
import Greet from "./component/Greet";
import Heading from "./component/Heading";
import Input from "./component/Input";
import LoggedIn from "./component/State/LoggedIn";
import Oscar from "./component/Oscar";
import Person from "./component/Person";
import PersonList from "./component/PersonList";
import Status from "./component/Status";
import { ThemeContextProvider } from "./component/context/ThemeContext";
function App() {
  const personName = {
    first: "Rey",
    last: "Mysterious",
  };

  const nameList = [
    {
      id: 1,
      firstName: "God",
      lastName: "Father",
    },
    {
      id: 2,
      firstName: "Jesus",
      lastName: "Christ",
    },
    {
      id: 3,
      firstName: "Holy",
      lastName: "Spirit",
    },
  ];

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <LoggedIn />
      <Greet name="timothy" age={28} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading..." />
      <Heading>placeholder Text</Heading>
      <Oscar>Wawa warisi</Oscar>

      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />

      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
}

export default App;
