import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { AirtableData } from "../hooks/useAirtable";
import ProductCardContainer from "./ProductCardContainer";
import ProductCard from "./ProductCard";
import { ProductRecord } from "../hooks/useProducts";

interface Props {
  record: ProductRecord;
}
const ProductGrid = (props: any) => {
  const { records, loading } = AirtableData();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {records.map((record, index) => (
          <React.Fragment key={index}>
            <ProductCardContainer key={record.id}>
              <ProductCard record={record} />
            </ProductCardContainer>
          </React.Fragment>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
