function chuteValido (chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        if (chute === "Game Over.") {
            document.body.innerHTML = `
            <h2>Game Over!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="botao-jogar">Jogar novamente</button>
            `
            document.body.style.background = "black";
        } else {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
            }
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
            <h2>Você acertou. Parabéns!</h2>
            <h3>O número aletório era ${numeroAleatorio}</h3>

            <button id="jogar-novamente" class="botao-jogar">Jogar novamente</button>
        `
        return
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})