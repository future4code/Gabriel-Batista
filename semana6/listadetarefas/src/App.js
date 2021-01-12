import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: 1,
        texto: 'Teste',
        completa: false
      },
      {
        id: 2,
        texto: 'Teste2',
        completa: true
      },],
    inputValue: "",
    filtro: "",
  }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  criaTarefa = (e) => {
    const Ntarefas = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const copiaDoEstado = [...this.state.tarefas]

    copiaDoEstado.push(Ntarefas)

    this.setState({
      tarefas: copiaDoEstado
    });

  }

  selectTarefa = (id) => {
    const copiaTarefas = this.state.tarefas.map((tarefa1) => {
      if (id === tarefa1.id) {
        const mudar = {
          ...tarefa1,
          completa:true
           } 
        return (
          this.setState({
            tarefas: mudar
          })    )
      }
   })

  }

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.value} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
