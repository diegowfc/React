import React, { Component } from "react";
import "./estilos.css";

export class CardNota extends Component {

    render() {
        return (
            <section className="card-nota">
                <header className="cabecalho">
                    <h3 className="titulo">{this.props.titulo}</h3>
                </header>
                <p className="texto">{this.props.text}</p>
            </section>
        )
    }

}

export default CardNota;