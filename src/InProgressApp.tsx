import React, { ReactNode } from "react";
import { AirtableData } from "./hooks/useAirtable";
import ProductCard from "./components/ProductCard";
import ProductGrid from "./components/ProductGrid";
import { ProductRecord } from "./hooks/useProducts";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  const { records, loading } = AirtableData();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav"  "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        {/*  <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem> */}

        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            {/* <ProductList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            /> */}
          </GridItem>
        </Show>
        <ProductGrid />
      </Grid>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            <div>{record.fields.Name}</div>
            <div>{record.fields["Unit cost"]}</div>
            <div>{record.fields.Description}</div>
            <div>{record.fields["Last Modified Time"]}</div>
            <div>{record.fields["Last Modified Time"]}</div>

            {/* Render other fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
