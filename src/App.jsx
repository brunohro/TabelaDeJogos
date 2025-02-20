import { useState } from 'react'
import './App.css'

function App() {
  const [jogos, setJogos] = useState([
    {
      id: 1,
      time1: "Flamengo",
      time2: "Palmeiras",
      data: "2024-06-15",
      horario: "18:30",
      local: "Maracanã",
      campeonato: "Brasileirão",
      placar: { time1: 3, time2: 0 },
      status: "Agendado"
    },
    {
      id: 2,
      time1: "Flamengo",
      time2: "Vasco",
      data: "2024-06-20",
      horario: "18:30",
      local: "Maracanã",
      campeonato: "Brasileirão",
      placar: { time1: 0, time2: 0 },
      status: "Agendado"
    },
    {
      id: 3,
      time1: "Flamengo",
      time2: "Fluminense",
      data: "2024-06-25",
      horario: "18:30",
      local: "Maracanã",
      campeonato: "Brasileirão",
      placar: { time1: 0, time2: 0 },
      status: "Agendado"
    }
  ])
  return (
    <div>
      <h1>Lista de Jogos</h1>
      {jogos.map((jogo) => (
        <div key={jogo.id}>
          <p>{jogo.time1} 🆚 {jogo.time2}</p>
          <p>📅 {jogo.data} ⏰ {jogo.horario}</p>
          <p>🏟 {jogo.local} | 🏆 {jogo.campeonato}</p>
          <p>⚽ Placar: {jogo.placar.time1} - {jogo.placar.time2}</p>
          <p>Status: {jogo.status}</p>
        </div>
      ))}
    </div>
  )
}

export default App
