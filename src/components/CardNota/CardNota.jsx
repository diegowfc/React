import React, { Component } from "react";
import "./estilos.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg"

export class CardNota extends Component {

    deletar() {
        const index = this.props.index;
        this.props.apagarNota(index);
    }

    render() {
        return (
            <section className="card-nota">
                <DeleteSVG onClick={this.deletar.bind(this)} />
                <h4>{this.props.categoria}</h4>
                <header className="cabecalho">
                    <h3 className="titulo">{this.props.titulo}</h3>
                </header>
                <p className="texto">{this.props.text}</p>
            </section>
        )
    }

}

export default CardNota;