import { Container, TableContainer } from '@mui/material';
import './App.css';
import AddData from './components/AddData';
import Posts from './components/Posts';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  return (
    <Container className='container'>
      <Posts></Posts>
    </Container>
  )
}

export default App;
