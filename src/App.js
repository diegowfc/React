import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/App.css';
import './assets/index.css';
import { render } from '@testing-library/react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    var novaNota = { titulo, texto };
    var novoArray = [...this.state.notas, novaNota];
    var novoEstado = {
      notas: novoArray
    };
    this.setState(novoEstado)
  }

  render() {
    return (
      <div className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </div>
    );
  }
}

export default App;
