import React from 'react';

import './App.css';

//import Routing from './utils/Routing';
//import Map from './oxfam data/Mapbox';
import Testmap from './Testmap';
import Store from './oxfam data/Store';

import Routing from './utils/Routing';



function App() {
  return (
    <Store>
      <Routing />
    </Store>
  );
}

export default App;
