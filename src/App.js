import React from 'react';
import './App.css';
import MoviesPage from './components/pages/MoviesPage';
import { Link, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>

        <Route exact  path='/movies' component={MoviesPage}></Route>
      </Container>
    </div>
  );
}

export default App;
