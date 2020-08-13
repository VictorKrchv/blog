import React from 'react';
import './App.css';
import { Routes } from './pages';
import { GlobalStyles } from './global-styles';

function App() {
  return (
    <div className="app">
      <GlobalStyles/>
      <Routes/>
    </div>
  );
}

export default App;
