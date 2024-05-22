export function Card(props) {
  const { carro, onDelete } = props;
  return (
    <div class="card">
      <img src={carro.imagem} class="card-img-top" alt={carro.nome} />
      <div key={carro.id} className="list-group-item">
        <strong>Nome:</strong> {carro.nome} <br />
        <strong>Data de Retirada:</strong> {carro.dataRetirada} <br />
        <strong>Data de Devolução:</strong> {carro.dataDevolucao} <br />
        <strong>Valor da Diária:</strong> {carro.valorDiaria} <br />
        <strong>Tipo:</strong> {carro.tipo} <br />
        <strong>Descrição:</strong> {carro.descricao} <br />
        <button
          onClick={() => onDelete(carro.id)}
          className="btn btn-primary mt-2"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(carro.id)}
          className="btn btn-danger mt-2"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
