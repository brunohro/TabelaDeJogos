import React from 'react'

const Partida = ({partida}) => {
  return (
    <div className="partidas" key={partida.id}
    >
          <p>{partida.time1} 🆚 {partida.time2}</p>
          <p>📅 {partida.data} ⏰ {partida.horario}</p>
          <p>🏟 {partida.local} | 🏆 {partida.campeonato}</p>
          <p>⚽ Placar: {partida.placar.time1} - {partida.placar.time2}</p>
          <p>Status: {partida.status}</p>
    </div>
  )
}

export default Partida
