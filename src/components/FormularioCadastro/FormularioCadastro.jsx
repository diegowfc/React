import React, { useEffect, useState, useContext } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosLogin from './DadosLogin';
import DadosEntrega from './DadosEntrega';
import { Alert, AlertTitle } from '@mui/material'
import { Step, StepLabel, Stepper } from '@material-ui/core';

function FormularioCadastro({ onSubmit }) {

    const [telaAtual, setTela] = useState(0);
    const [dadosArmazenados, setDados] = useState({});
    useEffect(() => {
        if (telaAtual === formularios.length - 1)
            onSubmit(dadosArmazenados);
    })

    const formularios = [
        <DadosLogin onSubmit={salvaDados} />,
        <DadosPessoais onSubmit={salvaDados} />,
        <DadosEntrega onSubmit={salvaDados} />,
        <Alert severity="success">
            <AlertTitle>Finalizado</AlertTitle>
            O cadastro foi realizado com sucesso!
        </Alert>
    ];

    function salvaDados(dados) {
        setDados({ ...dadosArmazenados, ...dados });
        proximaTela();
    }

    function proximaTela() {
        setTela(telaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={telaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Dados</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[telaAtual]}
        </>
    );

}

export default FormularioCadastro;