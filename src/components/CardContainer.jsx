import { GridItem, SimpleGrid, Stack } from '@chakra-ui/react';
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
    /*     <SimpleGrid grid-template-columns={'150px 1fr'}>
     */
    <SimpleGrid>
      <GridItem colSpan={3}>
        <SimpleGrid columns={3} spacing={8}>
          {data &&
            data.map(item => {
              return <Card key={uuidv4() + 'card'} item={item} />;
            })}
        </SimpleGrid>
      </GridItem>
      <GridItem colSpan={1}>
        <Stack color='#ffff24' backgroundColor='#ffff24'/>
      </GridItem>
    </SimpleGrid>
  );
}

export default CardContainer;
