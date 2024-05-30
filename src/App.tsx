import React, { ReactNode } from "react";
import { AirtableData } from "./hooks/useAirtable";
import ProductCard from "./components/ProductCard";
import ProductGrid from "./components/ProductGrid";
import { GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  const { records, loading } = AirtableData();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <ProductGrid />

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
