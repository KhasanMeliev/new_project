import { useState } from "react";
import "./App.style.js";
import { Box, Button, People, Person, Wrapper } from "./App.style.js";
import personData from "./data.js";

function App() {
  const [people, setPeople] = useState(personData);
  return (
    <Wrapper>
      <Box>
        <h1>{personData.length} Birthdays Today</h1>
        <People>
          {people.map((person) => (
            <Person key={person.id}>
              <img src={person.image} alt="profile_picture" />
              <div>
                <h3>{person.name}</h3>
                <p>{person.age} years</p>
              </div>
            </Person>
          ))}
        </People>
        <Button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </Button>
      </Box>
    </Wrapper>
  );
}

export default App;
