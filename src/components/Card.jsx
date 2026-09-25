import styles from '../styles/Card.module.css';

export function Card({ jogador }) {
  if (!jogador) return null;

  return (
    <div className={styles.card} aria-label={`Card de ${jogador.nome}`}>
      <div className={styles.imageContainer}>
        <img 
          src={jogador.foto} 
          alt={`Foto de ${jogador.nome}`} 
          className={styles.foto} 
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.nome}>{jogador.nome}</h3>
      </div>
    </div>
  );
}