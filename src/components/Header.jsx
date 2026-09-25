import styles from '../styles/Header.module.css';

export function Header() {
  return (
    <header className={styles.header} aria-label="Cabeçalho principal">
      <div className={styles.container}>
        <h1 className={styles.logo}>🏀 NBA STARS</h1>
      </div>
    </header>
  );
}