import React, { useContext, useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from '../../hooks/useErros';

function DadosPessoais({ onSubmit }) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, SetNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);

    const [erro, validaCampos, validacaoCompleta] = useErros(validacoes);

    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            if (validacaoCompleta()) {
                onSubmit({ nome, sobrenome, cpf, promocoes, novidades })
            }
        }}>

            <TextField
                value={nome}
                onChange={evento => {
                    setNome(evento.target.value);
                }}
                onBlur={validaCampos}
                error={!erro.nome.valido}
                helperText={erro.nome.text}
                id="nome"
                name="nome"
                label="Nome"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={sobrenome}
                onChange={evento => {
                    setSobrenome(evento.target.value);
                }}
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                value={cpf}
                onChange={evento => {
                    setCPF(evento.target.value);
                }}
                onBlur={validaCampos}
                error={!erro.cpf.valido}
                helperText={erro.cpf.text}
                id="cpf"
                name="cpf"
                label="CPF"
                required
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch
                    checked={promocoes}
                    onChange={(evento) => {
                        setPromocoes(evento.target.checked)
                    }}
                    name="promocoes"
                    color='primary' />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch
                    checked={novidades}
                    onChange={(evento) => {
                        SetNovidades(evento.target.checked)
                    }}
                    name="novidades"
                    color='primary' />}
            />

            <Button variant="contained" color="primary" type="submit">
                Próximo
            </Button>
        </form>
    );

}

export default DadosPessoais;