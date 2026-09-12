import styles from '../styles/Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>NBA STARS</h1>
      </div>
    </header>
  );
}