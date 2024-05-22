import React from 'react';

const ListaCarros = ({ carros, onDelete }) => {
  if (!carros || carros.length === 0) {
    return <p>Nenhum carro cadastrado.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Lista de Carros</h2>
      <ul className="list-group">
        {carros.map((carro) => (
          <li key={carro.id} className="list-group-item">
            <strong>Nome:</strong> {carro.nome} <br />
            <strong>Data de Retirada:</strong> {carro.dataRetirada} <br />
            <strong>Data de Devolução:</strong> {carro.dataDevolucao} <br />
            <strong>Valor da Diária:</strong> {carro.valorDiaria} <br />
            <strong>Tipo:</strong> {carro.tipo} <br />
            <strong>Descrição:</strong> {carro.descricao} <br />
            {carro.imagem && (
              <img
                src={carro.imagem}
                alt="Imagem do Carro"
                style={{ maxWidth: '100px' }}
              />
            )}
            <button
              onClick={() => onDelete(carro.id)}
              className="btn btn-danger mt-2"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCarros;
