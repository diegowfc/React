import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core"

function DadosEntrega({ onSubmit }) {

    const [cep, setCep] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");

    function checaCep(evento) {
        const cep = evento.target.value;
        if (cep.length == 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
                setEstado(data.uf);
                setCidade(data.localidade);
                setEndereco(data.logradouro + ', ' + data.bairro);
            })
        }
    }

    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            onSubmit({ cep, estado, cidade, endereco, numero })
        }}>
            <TextField
                value={cep}
                onChange={(evento) => {
                    setCep(evento.target.value);
                }}
                onBlur={checaCep}
                id="cep"
                label="cep"
                type="number"
                variant="outlined"
                margin="normal"
                placeholder='apenas números'
                fullWidth
            />

            <TextField
                value={estado}
                onChange={(evento) => {
                    setEstado(evento.target.value);
                }}
                id="estado"
                label="estado"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cidade}
                onChange={(evento) => {
                    setCidade(evento.target.value);
                }}
                id="cidade"
                label="cidade"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={endereco}
                onChange={(evento) => {
                    setEndereco(evento.target.value);
                }}
                id="endereco"
                label="endereco"
                type="text"
                placeholder='Rua x, número xxx, bairro x'
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={numero}
                onChange={(evento) => {
                    setNumero(evento.target.value);
                }}
                id="numero"
                label="numero"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>
                Finalizar
            </Button>

        </form>
    );
}

export default DadosEntrega;