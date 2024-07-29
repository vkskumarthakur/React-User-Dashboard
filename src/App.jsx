import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import ManageUsers from './components/ManageUsers';
import Statics from './components/Statics';

function App() {
  return (
    <Router>
      <Header />
        <MainContainer />
        <Footer />
    </Router>
  );
}

export default App;
