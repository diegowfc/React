import React, { Component } from 'react';
import './estilos.css';

class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = { categorias: [] }

        this._novaCategorias = this._novaCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novaCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novaCategorias);
    }

    _novaCategorias(categorias) {
        this.setState({ ...this.state, categorias })
    }

    _handlerEventoInput(evento) {
        if (evento.key == 'Enter') {
            var categoria = evento.target.value;
            this.props.adicionarCategoria(categoria);
            evento.currentTarget.value = "";

        }
    }

    render() {
        return (
            <div className='categorias'>
                <ul className='lista-categorias'>
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className='lista-categorias-item'>{categoria}</li>
                    })}
                </ul>
                <input
                    className='input'
                    type="text"
                    placeholder='Nova categoria (Enter para inserir)'
                    onKeyUp={this._handlerEventoInput.bind(this)}
                />
            </div>
        );
    }
}

export default ListaDeCategorias;