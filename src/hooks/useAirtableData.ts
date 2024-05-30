/*
ah yes I see this is very helpful for me.  It seems like the order of the FieldSet 
changes sometimes, so perhaps the types aren't as expected, but that quirk doesn't 
really explain what we are running into.
ChatGPT
I'm glad the simplified version is helpful! Yes, dealing with the variations in the 
order of fields or unexpected types in the FieldSet can sometimes introduce unexpected
 behavior. It's important to ensure that your application can handle such variations
 gracefully.

If you encounter issues with the order of fields or unexpected types in the FieldSet,
 you might need to implement additional validation or processing logic to handle these
  variations. For example, you could check if certain fields exist or have specific 
  types before accessing them.

Additionally, you could consider using TypeScript's as keyword or type assertion to 
explicitly cast field values to the expected types. However, be cautious when using
 type assertions, as they bypass type checking and can lead to runtime errors if 
 used incorrectly.

If you have specific requirements or encounter any further issues, feel free to ask 
for assistance! I'm here to help.
*/

import { useState, useEffect } from 'react';
import Airtable, { FieldSet } from 'airtable';

// Define your Airtable API key and base ID
const AIRTABLE_API_KEY = 'YOUR_API_KEY';
const AIRTABLE_BASE_ID = 'YOUR_BASE_ID';

// Initialize Airtable
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

export const useAirtableData = () => {
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any[] = [];
        await base('YOUR_TABLE_NAME')
          .select({
            // Add any filters or sorting options here
            view: 'Grid view', // Specify the view you want to use
          })
          .eachPage(
            (fetchedRecords, fetchNextPage) => {
              fetchedRecords.forEach(record => {
                data.push(record.fields);
              });
              fetchNextPage();
            },
            error => {
              if (error) {
                console.error('Error fetching data from Airtable:', error);
              }
              setLoading(false);
            }
          );
        setRecords(data);
      } catch (error) {
        console.error('Error fetching data from Airtable:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { records, loading };
};
