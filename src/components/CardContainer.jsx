import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

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
    <Grid templateColumns='3fr 1fr'>
      <GridItem marginRight='10'>
        <VStack marginBottom={5} alignItems='initial'>
          <Text as='u' fontSize='4xl' fontFamily='SuecaSlab'>
            Acumulado Grilla
          </Text>
          <HStack>
            <Link color='#0074c4'>Platos principales</Link>
            <Link color='#0074c4'>Cerdo Papas</Link>
            <Link color='#0074c4'>Date un gustito</Link>
            <Link color='#0074c4'>La familia</Link>
          </HStack>
        </VStack>
        <Flex flexWrap='wrap'>
          {data &&
            data.map(item => {
              return <Card key={item._id} item={item} />;
            })}
        </Flex>
      </GridItem>
      <GridItem bg='#a0dbe9' />
    </Grid>
  );
}

export default CardContainer;
