// // ItemList.tsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// interface Item {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
// }

// const ItemListContainer = styled.section`
//   margin-top: 20px;
// `;

// const ItemContainer = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

// const ItemImage = styled.img`
//   max-width: 100%;
// `;

// const ItemTitle = styled.h3`
//   margin-top: 0;
// `;

// const ItemList: React.FC = () => {
//   const [items, setItems] = useState<Item[]>([]);

//   useEffect(() => {
//     // Fetch items from API endpoint
//     axios.get<Item[]>('https://api.example.com/items')
//       .then(response => {
//         setItems(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching items:', error);
//       });
//   }, []);

//   return (
//     <ItemListContainer>
//       <h2>Item List</h2>
//       {items.map(item => (
//         <ItemContainer key={item.id}>
//           <ItemImage src={item.image} alt={item.name} />
//           <ItemTitle>{item.name}</ItemTitle>
//           <p>{item.description}</p>
//         </ItemContainer>
//       ))}
//     </ItemListContainer>
//   );
// }

// export default ItemList;

// ItemList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface Item {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ItemListContainer = styled.section`
  margin-top: 20px;
`;

const ItemContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const ItemImage = styled.img`
  max-width: 100%;
`;

const ItemTitle = styled.h3`
  margin-top: 0;
`;

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Fetch items from the mock API endpoint
    axios.get<Item[]>('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response => {
        // Filter out unnecessary data and map to our Item interface
        const filteredItems = response.data.map((item: any) => ({
          id: item.id,
          name: item.title,
          description: item.title,
          image: item.url
        }));
        setItems(filteredItems);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <ItemListContainer>
      <h2>Item List</h2>
      {items.map(item => (
        <ItemContainer key={item.id}>
          <ItemImage src={item.image} alt={item.name} />
          <ItemTitle>{item.name}</ItemTitle>
          <p>{item.description}</p>
        </ItemContainer>
      ))}
    </ItemListContainer>
  );
}

export default ItemList;

