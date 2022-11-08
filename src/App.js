import {
  ChakraProvider,
  Container,
  Divider,
  Flex,
  theme,
} from '@chakra-ui/react';
import React from 'react';

import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';

function App () {
  return (
    <ChakraProvider theme={theme}>
      <Container h={20} maxW={1292}>
        <Header />
      </Container>
      <Divider bordersStyle='#000' borderColor='grey' />
      <Container maxW={1292}>
        <Flex marginTop={6} marginBottom={8} bg='#a0dbe9' h='170' />
        <CardContainer />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
