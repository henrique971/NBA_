import { useState } from 'react'
import { Card } from './components/Card'
import { Header } from './components/Header'
import './App.css'
import styles from './styles/App.module.css'
import lebronImg from "./assets/lebron.png"
import curryImg from "./assets/curry.png"
import giannisImg from "./assets/giannis.png"
import jokicImg from "./assets/jokic.png"
import lukaImg from "./assets/luka.png"
import tatumImg from "./assets/tatum.png"


const JOGADORES_INICIAIS = [
  { id: 1, nome: "LeBron James", foto: lebronImg },
  { id: 2, nome: "Stephen Curry", foto: curryImg },
  { id: 3, nome: "Giannis Antetokounmpo", foto: giannisImg },
  { id: 4, nome: "Jayson Tatum", foto: tatumImg },
  { id: 5, nome: "Luka Doncic", foto: lukaImg },
  { id: 6, nome: "Nikola Jokic", foto: jokicImg }
]

function App() {
  const [listaJogadores] = useState(JOGADORES_INICIAIS)

  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.gridJogadores}>
        {listaJogadores.map((jogador) => (
          <Card key={jogador.id} jogador={jogador} />
        ))}
      </main>
    </div>
  )
}

export default App
