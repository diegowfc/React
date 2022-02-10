import React, { useState } from 'react';


function useErros(validacoes) {

    const estadoInicial = criaEstadoInicial(validacoes);
    const [erro, setErro] = useState(estadoInicial);

    function validaCampos(evento) {
        const { name, value } = evento.target;
        const novoEstado = {...erro }
        novoEstado[name] = validacoes[name](value);
        setErro(novoEstado);
    }


    function validacaoCompleta() {
        for (var campo in erro) {
            if (!erro[campo].valido) {
                return false;
            }
        }
        return true;
    }

    return [erro, validaCampos, validacaoCompleta];
}


function criaEstadoInicial(validacoes) {

    const estadoInicial = {}
    for (var atributo in validacoes) {
        estadoInicial[atributo] = { valido: true, text: "" };
    }

    return estadoInicial;
}

export default useErros;