import React, { useState } from 'react';

import {
  Stack,
  Input,
  Heading,
  Button,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';

import {
  CloseIcon,
  HamburgerIcon,
  Search2Icon,
  SearchIcon,
} from '@chakra-ui/icons';

function Header () {
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [showLargeSearchBox, setShowLargeSearchBox] = useState(false);

  return (
    <Stack padding={4} direction='row' justifyContent='space-between'>
      {showLargeSearchBox ? (
        <Stack spacing={4} direction='row' justifyContent='space-between'>
          <Stack spacing={4} direction='row' justifyContent='space-around'>
            {showCloseButton ? (
              <Button
                onClick={() => setShowCloseButton(!showCloseButton)}
                backgroundColor='#fff'
                leftIcon={<CloseIcon />}
              >
                <Text fontSize='12'>CERRAR</Text>
              </Button>
            ) : (
              <Button
                onClick={() => setShowCloseButton(!showCloseButton)}
                backgroundColor='#fff'
                leftIcon={<HamburgerIcon />}
              >
                <Text fontSize='12'>MENÚ</Text>
              </Button>
            )}
            <InputGroup>
              <Input
                onFocus={() => setShowLargeSearchBox(!showLargeSearchBox)}
                type='text'
                placeholder='Buscar'
              />
              <InputRightElement children={<Search2Icon />} />
            </InputGroup>
          </Stack>
        </Stack>
      ) : (
        <Stack spacing={4} direction='row' justifyContent='space-between'>
          <Stack spacing={4} direction='row' justifyContent='space-around'>
            {showCloseButton ? (
              <Button
                onClick={() => setShowCloseButton(!showCloseButton)}
                backgroundColor='#fff'
                leftIcon={<CloseIcon />}
              >
                <Text fontSize='12'>CERRAR</Text>
              </Button>
            ) : (
              <Button
                onClick={() => setShowCloseButton(!showCloseButton)}
                backgroundColor='#fff'
                leftIcon={<HamburgerIcon />}
              >
                <Text fontSize='12'>MENÚ</Text>
              </Button>
            )}
            <InputGroup>
              <Input
                type='text'
                placeholder='Buscar'
                onBlur={() => setShowLargeSearchBox(!showLargeSearchBox)}
                w={600}
              />
            </InputGroup>
            <Button backgroundColor='#006998' color='white'>
              BUSCAR
            </Button>
          </Stack>
        </Stack>
      )}
      <Heading
        hidden={!showLargeSearchBox}
        as='b'
        fontFamily='serif'
        fontSize='5xl'
        color='#006998'
      >
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
