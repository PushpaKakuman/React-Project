import React from 'react';
import Header from './Components/Header'
import Fotter from './Components/Fotter'
import { Container  } from 'react-bootstrap'



function App() {
  return (
    <div>
      <Header/>
      <main>
        <Container>
          <h1>Welcome</h1>
        </Container>
        <Fotter/>
      </main>
    </div>
  )

}

export default App;
