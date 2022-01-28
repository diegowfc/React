import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/App.css';
import './assets/index.css';
import { render } from '@testing-library/react';
import Categoria from './dados/categorias';
import ArrayNotas from './dados/notas';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categoria();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <div className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className='conteudo-principal'>

          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />

          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>

      </div>
    );
  }
}

export default App;
