import React from 'react';
import Header from './components/Header';
import Fotter from './components/Fotter';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Fotter />
    </Router>
  )

}

export default App;
