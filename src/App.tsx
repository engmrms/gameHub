import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./Components/GameGrid";
import GenresList from "./Components/GenresList";
import Navbar from "./Components/Navbar";
import { Genre } from "./Hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}>
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenresList onSelectGenre={genre => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
