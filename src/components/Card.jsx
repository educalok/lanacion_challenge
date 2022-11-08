import { Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Card ({ item }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <Stack spacing={2} marginRight={10} marginBottom={6} flex='1 0 200px'>
      <Stack>
        <Image
          objectFit='cover'
          src={item.promo_items.basic.url}
        />
      </Stack>
      <Stack>
        <Heading fontSize={'1xl'} fontFamily={'body'} key={uuidv4()}>
          {item.headlines.basic}
        </Heading>
        <Text as='sub' key={uuidv4()}>
          {new Date(item.display_date).toLocaleDateString('es-ES', options)}
        </Text>
      </Stack>
    </Stack>
  );
}

export default Card;
