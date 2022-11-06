import React from 'react';

import { Stack, Input, Heading, Button, InputGroup, InputRightElement } from '@chakra-ui/react';

import { HamburgerIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';

function Header () {
  return (
    <Stack padding={4} direction='row' justifyContent='space-between'>
      <Stack spacing={4} direction='row' justifyContent='space-around'>
        <Button backgroundColor='#fff' leftIcon={<HamburgerIcon />}>
          MENÚ
        </Button>
        <InputGroup>
          <Input type='text' placeholder='Buscar'/>
          <InputRightElement children={<Search2Icon />} />
        </InputGroup>
      </Stack>
      <Heading as='b' fontFamily='serif' fontSize='5xl' color='#006998'>
        LA NACION
      </Heading>
      <Stack direction='row'>
        <Button
          border='1px'
          backgroundColor='#ffff24'
          color='#000'
          borderColor='#ccc'
        >
          SUBSCRIBITE
        </Button>
        <Button
          border='1px'
          backgroundColor='#fff'
          color='#0250c9'
          borderColor='#0250c9'
        >
          INGRESAR
        </Button>
      </Stack>
    </Stack>
  );
}

export default Header;
