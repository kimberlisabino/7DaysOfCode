const area = prompt("Escolha a sua área: digite FE para Front-end ou BE para Back-end")
let linguagem = ""

if (area == "FE") {
    linguagem = prompt("Escolha sua linguagem: digite React ou Vue")
} else if (area == "BE") {
    linguagem = prompt("Escolha sua linguagem: digite C# ou Java")
} else {
    alert("Você não inseriu uma área válida :(")
}

const especialidadeOuFullStack = prompt("Se você pretende se especializar na área escolhida, digite '1', senão, digite '2' se quiser se tornar um dev Fullstack")

if(especialidadeOuFullStack == "1") {
    alert("Legal! Continue aprofundado seus conhecimentos")
} else if(especialidadeOuFullStack == "2") {
    alert("Show, você tem um grande desafio pela frente")
}  else {
    alert("Você não inseriu uma área válida :(")
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite '1' caso sua resposta seja sim ou '2' caso seja não")

while(msg == "1") {
    let novaTecnologia = prompt("Qual?")
    alert(novaTecnologia + " é mesmo muito interessante!")
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite '1' caso sua resposta seja sim ou '2' caso seja não")
}

if(msg == "2") {
    alert("Tudo bem, mas continue estudando sempre!")
}