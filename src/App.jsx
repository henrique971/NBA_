import { useState } from 'react'
import { Card } from './components/Card'
import { Header } from './components/Header'
import './App.css'

const JOGADORES_INICIAIS = [
  { id: 1, nome: "LeBron James", foto: "./assets/lebron.png" },
  { id: 2, nome: "Stephen Curry", foto: "./assets/curry.png" },
  { id: 3, nome: "Giannis Antetokounmpo", foto: "./assets/giannis.png" },
  { id: 4, nome: "Jayson Tatum", foto: "./assets/tatum.png" },
  { id: 5, nome: "Luka Dončić", foto: "./assets/luka.png" },
  { id: 6, nome: "Nikola Jokić", foto: "./assets/jokic.png" }
]

function App() {
  const [listaJogadores, setListaJogadores] = useState(JOGADORES_INICIAIS)

  return (
    <>
      <Header />
      <main className="container">
        {listaJogadores.map((jogador) => (
          <Card key={jogador.id} jogador={jogador} />
        ))}
      </main>
    </>
  )
}

export default App
