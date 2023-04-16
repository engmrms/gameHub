import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area={"nav"} bg={"orange.300"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"green.300"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"teal.300"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
