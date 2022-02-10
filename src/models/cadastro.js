function validaCPF(cpf) {

    if (cpf.length != 11) {
        return { valido: false, text: "CPF deve possuir 11 números!" }
    } else {
        return { valido: true, text: "" }
    }
}

function validaSenha(senha) {

    if (senha.length < 4 || senha.length > 72) {
        return { valido: false, text: "Este campo deve ter entre 4 e 72 dígitos" }
    } else {
        return { valido: true, text: "" }
    }
}

export { validaCPF, validaSenha };