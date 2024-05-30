import React, { useState, useEffect } from "react";
import Airtable, { FieldSet, Record as AirtableRecord } from "airtable";
import { ProductRecords } from "./useProductRecords";

// Define your Airtable API key and base ID
/* process.env.REACT_APP_AIRTABLE_API_KEY,
process.env.REACT_APP_AIRTABLE_DATABASE,
"GreenBay Second Life Inventory",
"Grid view",
10 */
const BID = process.env.REACT_APP_AIRTABLE_DATABASE?.toString;
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID =
  process.env.REACT_APP_AIRTABLE_DATABASE?.toString() || ""; //"appMLuqMHfzFmf0ti";

// Initialize Airtable
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

export interface Record {
  id: number;
  fields: {
    // Define the fields in your Airtable table
    Desc: string;
    Images: [];
    In_stock: boolean;
    Last_Modified_Time: string;
    Link: string;
    Name: string;
    Notes: string;
    Size: string;
    Type: string;
    Unit_cost: number;
    Vendor: string;

    // Add more fields as needed
  };
}

export const AirtableData = () => {
  const [records, setRecords] = useState<ProductRecords[] | any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from Airtable when the component mounts
    base("products")
      .select({
        // Add any filters or sorting options here
        view: "Grid view", // Specify the view you want to use
      })
      .eachPage(
        (fetchedRecords, 
          fetchNextPage) => {
           
          // Process records
           setRecords(
            fetchedRecords.map((record) => ({
              id: record.id,
              fields: record.fields,
            }))
          ); 
          console.log({ fetchedRecords });
          // Fetch more pages if available
          fetchNextPage();
        },
        (error) => {
          if (error) {
            console.error("Error fetching data from Airtable:", error);
            // Handle error
          }
          setLoading(false);
        }
      );
  }, []);

  return { records, loading };
}