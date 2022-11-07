import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from './Card';

function CardContainer () {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData () {
    const fetchData = await fetch(
      'https://lanacion-challenge-nine.vercel.app/lanacion.json'
    );
    const results = await fetchData.json();
    const filteredData = results.articles.filter(
      article => article.subtype === '7'
    );
    console.log(filteredData);
    setData(filteredData);
  }
  return (
    <SimpleGrid columns={3} spacing={5}>
      {data &&
        data.map(item => {
          return <Card key={uuidv4() + 'card'} item={item} />;
        })}
    </SimpleGrid>
  );
}

export default CardContainer;
