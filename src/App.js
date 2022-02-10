import React, { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { validaCPF, validaSenha } from './models/cadastro'
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Cadastre-se</Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validaCPF, senha: validaSenha, nome: validaSenha }}
      >
        <FormularioCadastro onSubmit={onSubmit} />
      </ValidacoesCadastro.Provider>
    </Container>
  )
}

function onSubmit(dados) {
  localStorage.setItem('CadastroUsuario', JSON.stringify(dados));
}

export default App;