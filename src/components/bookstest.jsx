import React from "react";
import { ReactDOM } from "react";




const books = [
    { id: "B09123N2QN",
      title: "Learn To Code With JavaScript",
      author: "Darren Jones",
      price: 2260,
      pages: 425,
      cover: "https://m.media-amazon.com/images/I/412KSS+3fjL._SX260_.jpg",
      keywords: ["coding", "javascript", "beginner"]
    },
     { id: "B088P9Q6BB",
      title: "JavaScript: The Definitive Guide",
      author: "David Flanagan",
      price: 2399,
      pages: 708,
      cover: "https://m.media-amazon.com/images/I/51wijnc-Y8L._SX260_.jpg",
      keywords: ["rhino", "javascript", "mastery"]
    },
     { id: "B07C96Q217",
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      price: 1994,
      pages: 474,
      cover: "https://m.media-amazon.com/images/I/51-5ZXYtcML.jpg",
      keywords: ["eloquent", "javascript", "modern"]
    }
   ]
   
   const BookRow = ({id,title,author,price,pages}) => 
     <tr key={id}>
       <td>{title}</td>
       <td>{author}</td>
       <td>{pages}</td>
       <td>£{price/100}</td>
     </tr>
   
   const BookTable = () =>
       <div>
         <h1>Books</h1>
         <table>
           <thead>
             <th>Title</th>
             <th>Author</th>
             <th>Number of Pages</th>
             <th>Price</th>
           </thead>
           <tbody>
           {books.map(BookRow)}
           </tbody>
         </table>
       </div>
   
   ReactDOM.render(<BookTable />, document.getElementById("root"))
   View Compiled
   
   
   Resources