import React, { Component } from 'react';
import './estilos.css';

class ListaDeCategorias extends Component {

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
                    {this.props.categorias.map((categoria, index) => {
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