function pulaLinha() {
    document.write("<br><br>")
}

 function mostra(frase) {
    document.write(frase)
    pulaLinha()
}

const nome = prompt("Qual é o seu nome?")
const idade = parseInt(prompt(nome + ", qual é a sua idade?"))
const linguagem = prompt(nome + ", qual linguagem de programação você está estudando?")

mostra("Olá, " + nome + " , você tem " + idade + " anos e já está aprendendo " + linguagem + "!" )

const option = prompt(nome + ", você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO")

if(option == 1) {
    mostra("Muito bom! Continue estudando e você terá muito sucesso.")
} else if(option == 2) {
    mostra("Ahh que pena... Já tentou aprender outras linguagens?")
}