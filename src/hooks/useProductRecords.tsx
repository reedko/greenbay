declare const ProductRecordsInstance: {
  id: string;
  fields: {
    Images: {
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
    }[];
    Description: string;
    Name: string;
    "Size (WxLxH)": string;
    Notes: string;
    "Unit cost": number;
    Type: string;
    "In stock": boolean;
    Vendor: string;
    Link: string;
    "Last Modified Time": string;
    Condition: string;
    Video: {
      id: string;
      url: string;
      filename: string;
      size: number;
      type: string;
    }[];
  };
}[];
export type ProductRecords = typeof ProductRecordsInstance;
export {};
