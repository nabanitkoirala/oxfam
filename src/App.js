import React from 'react';

import './App.css';

//import Routing from './utils/Routing';
//import Map from './oxfam data/Mapbox';
import Testmap from './Testmap';
import Store from './oxfam data/Store';

import Routing from './utils/Routing';
import Map from './oxfam data/Mapbox';
import Chart from './../src/oxfam data/Pages/Chart data/Chart';
import Design from './Design';



function App() {
  return (
    <Store>
      <Routing />
    </Store>

  );
}

export default App;
