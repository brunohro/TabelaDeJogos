import {useState} from 'react'

const PartidaForm = ({addPartida}) => {
    const [time1, setTime1] = useState("");
    const [time2, setTime2] = useState("");
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const [local, setLocal] = useState("");
    const [campeonato, setCampeonato] = useState("");
    const [ocorreu, setOcorreu] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
        !time1 || !time2 
        || !data ||
        !horario ||
        !local ||
        !campeonato) return;
        addPartida(time1, time2, data, horario, local, campeonato, ocorreu,)
        }
  return (
    <div>
      <h2>Adicionar partida:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Time 1"
          value={time1}
          onChange={(e) => setTime1(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Time 2"
          value={time2}
          onChange={(e) => setTime2(e.target.value)}
          required
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <input
          type="time"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Local do jogo"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Campeonato"
          value={campeonato}
          onChange={(e) => setCampeonato(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={ocorreu}
            onChange={(e) => setOcorreu(e.target.checked)}
          />
          O jogo já ocorreu?
        </label>
        <button type="submit">Adicionar Jogo</button>
      </form>
    </div>
  )
}

export default PartidaForm
