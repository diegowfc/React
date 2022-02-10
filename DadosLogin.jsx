import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from '../../hooks/useErros';

function DadosLogin({ onSubmit }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erro, validaCampos, validacaoCompleta] = useErros(validacoes);

    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            if (validacaoCompleta()) {
                onSubmit({ email, senha });
            }
        }}>
            <TextField
                value={email}
                onChange={(evento) => {
                    setEmail(evento.target.value)
                }}
                id="email"
                name="email"
                label="email"
                type="email"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={senha}
                onChange={(evento) => {
                    setSenha(evento.target.value)
                }}
                onBlur={validaCampos}
                error={!erro.senha.valido}
                helperText={erro.senha.text}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <Button variant="contained" color="primary" type="submit">Próximo</Button>
        </form>
    );
}

export default DadosLogin;