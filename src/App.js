import { ChakraProvider, Container, Stack, theme } from '@chakra-ui/react';
import React from 'react';

import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';

function App () {
  return (
    <ChakraProvider theme={theme}>
      <Stack spacing={4} direction='column' justifyContent='space-between'>
        <Header />
        <CardContainer />
        <Footer />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
