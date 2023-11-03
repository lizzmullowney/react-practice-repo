
import { useState } from 'react';
import componentsImg from './assets/components.png'

import Header from './components/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from './components/Examples.jsx'








function App() {


  return (
    <>
      <Header />
      <main>
       <CoreConcepts />
       <Examples />
    </main>
    </>
  );
}

export default App;
