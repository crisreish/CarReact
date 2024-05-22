import React from "react";
import { Card } from "./Card";

const ListaCarros = ({ carros, onDelete }) => {
  if (!carros || carros.length === 0) {
    return <p>Nenhum carro cadastrado.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Lista de Carros</h2>
      <ul className="row">
        {carros.map((carro) => (
          <div className="col-md-4">
            <Card carro={carro} onDelete={onDelete} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListaCarros;
