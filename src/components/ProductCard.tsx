import { AirtableData } from "../hooks/useAirtable";
import React, { ReactNode } from "react";
import {
  Card,
  CardBody,
  Center,
  HStack,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";

import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { ProductRecord } from "../hooks/useProducts";
import ListPrice from "./ListPrice";

interface Props {
  record: ProductRecord;
}
const ProductCard = ({ record }: Props) => {
  const descriptionLong = record.fields.Description;
  const indexCondition = descriptionLong.search(/\Condition\b/);
  const desc =
    descriptionLong.slice(0, indexCondition) +
    descriptionLong.slice(indexCondition + 12, descriptionLong.length);
  const conditionRating = descriptionLong.slice(
    indexCondition + 10,
    indexCondition + 11
  );

  const notesLong = record.fields.Notes ?? "";

  const indexManual = notesLong ? notesLong.search(/\User Manual\b/) : -1;
  const userManualLink =
    notesLong !== ""
      ? indexManual >= 0
        ? notesLong.slice(indexManual + 12, notesLong.length)
        : ""
      : "";

  console.log(notesLong);

  return (
    <div>
      <Card key={record.id}>
        <Box bgGradient="linear(#8bbe5a,#6cab8b,#509ab6);" borderRadius="2px">
          <Center>{record.fields.Name}</Center>
        </Box>
        {getCroppedImageUrl(record.fields.Images, desc)}

        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <div>
              {record.fields.Link && (
                <a href={record.fields.Link}>Manufacturer Info</a>
              )}
            </div>
            <ListPrice score={record.fields["Unit cost"]}></ListPrice>
          </HStack>
          <Heading fontSize="2xl">
            <div>
              {userManualLink && <a href={userManualLink}>User Manual</a>}
            </div>
            {!userManualLink && record.fields.Notes}
            <Emoji rating={conditionRating}></Emoji>
          </Heading>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
