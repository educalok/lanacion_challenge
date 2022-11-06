import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';

import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';

function App () {
  return (
    <ChakraProvider theme={theme}>
        <Header />
        <CardContainer />
        <Footer />
    </ChakraProvider>
  );
}

export default App;
