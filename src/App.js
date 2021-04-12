import React from 'react';


import PrimeReact from 'primereact/api';
import DataTableCrudDemo from './demo/DataTableCrudDemo.js'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


import './App.css';

function App() {

  // active ripple effect
  PrimeReact.ripple = true;

  return (
    <div className="App">
      <DataTableCrudDemo/>
    </div>
  );
}

export default App;
