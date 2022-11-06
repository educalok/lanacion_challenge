import {
  Center,
  ChakraProvider,
  Container,
  Stack,
  theme,
} from '@chakra-ui/react';
import React from 'react';

import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';

function App () {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={1340}>
        <Header />
        <CardContainer />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
