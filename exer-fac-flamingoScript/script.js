const divContainer = document.querySelector(".container")

const btns = [
    {
        nome: "Soma",
        func: soma
    },

    {
        nome: "Divisão",
        func: divisao
    },

    {
        nome: "Subtração",
        func: subtracao
    },

    {
        nome: "Multiplicação",
        func: multiplicacao
    },

    {
        nome: "IMC",
        func: imc
    },
]

function soma(){
    alert("soma")
}
function divisao(){
    alert("divisao")
}
function subtracao(){
    alert("subtracao")
}
function multiplicacao(){
    alert("multiplicacao")
}
function imc(){
    const peso = Number(prompt("Digite seu peso"))
    const altura = Number(prompt("Digite sua altura"))
}

btns.forEach((btn) =>{
    const btnExercicio = document.createElement("button")
    btnExercicio.textContent = btn.nome
    btnExercicio.addEventListener("click", btn.func)

    divContainer.appendChild(btnExercicio)
})