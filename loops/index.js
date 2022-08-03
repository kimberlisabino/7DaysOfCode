function sorteia(n) {
    return Math.round(Math.random() * n)
}

let numeroPensado = sorteia(10)
let tentativas = 1

while(tentativas <= 3) {
    
    const chute = parseInt(prompt("Qual é o seu chute?"))
    
    if(chute === numeroPensado) {
        alert("Parabéns, você acertou!")
        break
    } else {
        alert("Que pena, você errou :( tente novamente")
    }

    tentativas++
}

if (tentativas >= 3) {
    alert("O número era " + numeroPensado)
}