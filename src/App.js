import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/App.css';
import './assets/index.css';
import { render } from '@testing-library/react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: ["Trabalho", "Faculdade"]
    };
  }

  criarNota(titulo, texto) {
    var novaNota = { titulo, texto };
    var novoArray = [...this.state.notas, novaNota];
    var novoEstado = {
      notas: novoArray
    };
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria) {
    var novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    var novoEstado = { ...this.state, categorias: novoArrayCategorias };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    var arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <div className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className='conteudo-principal'>

          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />

          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>

      </div>
    );
  }
}

export default App;
