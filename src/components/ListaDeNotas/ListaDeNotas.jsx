import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilos.css";

export class ListaDeNotas extends Component {

    render() {
        return (
            <ul className="lista">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index} className="items">
                            <CardNota titulo={nota.titulo} text={nota.texto} />
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default ListaDeNotas;