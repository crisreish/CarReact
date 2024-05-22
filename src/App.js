import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cadastro from "./components/Cadastro";
import ListaCarros from "./components/ListaCarros";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [carros, setCarros] = useState([
    {
      nome: "Geely Galaxy E5 2025",
      id: 1,
      imagem:
        "https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/09/18111512/16.09.21_Creta-Ultimate-1160x652.jpg",
      dataRetirada: "23/05/2024",
      dataDevolucao: "28/05/2024",
      valorDiaria: "R$435",
      tipo: "SVU",
      descricao:
        "SUV elétrico compacto, oferece bastante espaço para os ocupantes.",
    },
    {
      nome: "Hyundai Santa Cruz 2024",
      id: 2,
      imagem:
        "https://carrosbemmontados.com.br/wp-content/webp-express/webp-images/uploads/2024/04/2025-HYUNDAI-SANTA-CRUZ-8-1536x864.jpg.webp",
      dataRetirada: "22/05/2024",
      dataDevolucao: "25/05/2024",
      valorDiaria: "R$175",
      tipo: "Picape",
      descricao:
        "Picape compacta monobloco, conj. ótico full LED e rodas diamantadas.",
    },
  ]); // Inicializar como um array vazio

  const handleAddCarro = (carro) => {
    const newCarro = { ...carro, id: carros.length + 1 };
    setCarros([...carros, newCarro]);
  };

  const handleDeleteCarro = (id) => {
    setCarros(carros.filter((carro) => carro.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cadastro"
            element={<Cadastro onAddCarro={handleAddCarro} />}
          />
          <Route
            path="/lista"
            element={
              <ListaCarros carros={carros} onDelete={handleDeleteCarro} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
