// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {

    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123   
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)