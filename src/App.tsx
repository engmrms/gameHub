import { Button } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button colorScheme="teal" size={"sm"}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
