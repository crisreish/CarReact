import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import ListaCarros from './components/ListaCarros';
import Footer from './components/Footer';

function App() {
  const [carros, setCarros] = useState([]); // Inicializar como um array vazio

  const handleAddCarro = (carro) => {
    const newCarro = { ...carro, id: carros.length + 1 };
    setCarros([...carros, newCarro]);
  };

  const handleDeleteCarro = (id) => {
    setCarros(carros.filter(carro => carro.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro onAddCarro={handleAddCarro} />} />
          <Route path="/lista" element={<ListaCarros carros={carros} onDelete={handleDeleteCarro} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
