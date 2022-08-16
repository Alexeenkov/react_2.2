import './App.css';
import React from 'react';
import Store from './components/Store/Store';
import { products } from './data/data';

function App() {
  return (
    <Store products={products} />
  );
}

export default App;
