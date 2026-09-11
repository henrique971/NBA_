export function Card({ jogador }) {
  if (!jogador) return null;

  return (
    <div className="card">
      <img 
        src={jogador.foto} 
        alt={`Foto de ${jogador.nome}`} 
        className="card-foto" 
      />
      <div className="card-info">
        <h3>{jogador.nome}</h3>
      </div>
    </div>
  );
}