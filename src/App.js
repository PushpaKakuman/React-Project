import React from 'react';
import Header from './components/Header';
import Fotter from './components/Fotter';
import HomeScreen from './Screens/HomeScreen';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Header/>
      <main className='py-3'>
        <Container>
        <HomeScreen/>
        </Container>
      </main>
      <Fotter/>
    </div>
  )

}

export default App;
