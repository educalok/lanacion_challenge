import { Heading, Image, Img, Stack, Text } from '@chakra-ui/react';
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
    <Stack
      shadow='lg'
      borderWidth='2px'
      width={400}
    >
      <Image src={item.promo_items.basic.url} />
      <Stack>
        <Heading fontSize={'2xl'} fontFamily={'body'} key={uuidv4()}>
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
