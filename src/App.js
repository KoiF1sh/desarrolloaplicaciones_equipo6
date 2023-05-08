import './App.css';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from './Components/Header';
import Body from './Components/Body';
import Search from './Components/Search';
import Banner from './Components/Banner';
import Formulario from './Components/Formulario';
import FirebaseProvider from './Context/FirebaseContext';

function App() {
  return (
    <FirebaseProvider>
      <div className="App">
        <Header />
        <Search />
        <Formulario />
        <Body />
        <Banner />
      </div>
    </FirebaseProvider>
  );
}

export default App;
