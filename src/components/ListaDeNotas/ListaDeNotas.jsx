import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilos.css";

export class ListaDeNotas extends Component {

    constructor() {
        super();
        this.state = { notas: [] }

        this._novasNotas = this._novasNotas.bind(this);
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas);
    }

    componentWillUnmount() {
        this.props.notas.desinscrever(this._novasNotas);
    }

    _novasNotas(notas) {
        this.setState({ ...this.state, notas })
    }

    render() {
        return (
            <ul className="lista">
                {this.state.notas.map((nota, index) => {
                    return (
                        <li key={index} className="items">

                            <CardNota
                                index={index}
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo}
                                text={nota.texto}
                                categoria={nota.categoria}
                            />
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default ListaDeNotas;