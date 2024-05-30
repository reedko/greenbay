import { useState } from "react";
import { AirtableData } from "./useAirtable";

export type ProductRecord = {
  id: number;
  fields: {
    // Define the fields in your Airtable table
    Description: string;
    Images: [
      {
        id: string;
        width: number;
        height: number;
        url: string;
        filename: string;
        size: number;
        type: string;
        thumbnails: {
          small: {
            url: string;
            width: number;
            height: number;
          };
          large: {
            url: string;
            width: number;
            height: number;
          };
          full: {
            url: string;
            width: number;
            height: number;
          };
        };
      }
    ];
    "In stock": boolean;
    "Last Modified Time": string;
    Link: string;
    Name: string;
    Notes: string;
    Size: string;
    Type: string;
    "Unit cost": number;
    Vendor: string;

    // Add more fields as needed
  };
};

export const useProducts = () => {
  const productRecord: ProductRecord[] = [];
  const { records, loading } = AirtableData();

  //records.map((record) => productRecord.push(record));
  console.log(productRecord);
  return productRecord;
};

/*  
     // Assuming you have multiple records returned from the field set
  const fieldSetRecords: FieldSet[] = [
    // Populate your records here
  ];
   // Your React component
const MyComponent: React.FC = () => {
  // Define your local interface for a single record
  interface LocalRecord {
    [key: number]: any;
  }
   
   
   
   // Loop through each field in the record and map them to the local record
    for (const id : number in record) {
      if (Object.prototype.hasOwnProperty.call(record, id)) {
        productRecord[id] = record[id];
      }
    }

    return productRecord;
  });

  // Render your component with the grid of cards
  return (
    <div className="grid">
      {localRecords.map((record: LocalRecord, index: number) => (
        <div key={index} className="card">
          //{ Render each field of the record here }
          {Object.keys(record).map((key: string) => (
            <div key={key}>
              <strong>{key}</strong>: {record[key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
*/
