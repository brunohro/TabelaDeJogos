import { useState } from 'react'
import './App.css'
import Partida from './components/Partida'
import PartidaForm from './components/PartidaForm';

function App() {
  const [partidas, setPartidas] = useState([
    {
      id: 1,
      time1: "Flamengo",
      time2: "Palmeiras",
      data: "2024-06-15",
      horario: "18:30",
      local: "Maracanã",
      campeonato: "Brasileirão",
      placar: { time1: 3, time2: 0 },
      ocorrido: true,
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
      ocorrido: false,
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
      ocorrido: false,
    }
  ])

  const addPartida = (
    time1, time2, data, horario, local, campeonato, placar
  ) => 
  {
    const newPartidas = [...partidas,
      { id: Math.floor(Math.random() * 10000), 
        time1,
        time2,
        data,
        horario,
        local,
        campeonato,
        placar,
        ocorrido: false,
      },
      ];
    setPartidas(newPartidas);
  };
  return (
    <div className='app'>
      <div>
      <h1>Lista de Jogos</h1>
      {partidas.map((partida) => (
        <Partida key={partida.id} partida={partida} />
      ))}
      </div>
      <PartidaForm addPartida={addPartida}/>
    </div>
  )
}

export default App
