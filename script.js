//Carrega o número aleatório e o número de tentativas
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let numeroTentativas = 10

//Funções auxiliares
const limpaInput = () => document.getElementById('palpite').value = ''
const atualizaTentativa = () => document.getElementById('vida').innerHTML = `Tentativas restantes: ${numeroTentativas}`
const pegaValor = (id) => document.getElementById(id)

//Inicializa o contador de tentativas
window.onload= atualizaTentativa

//Desabilita o jogo
function desabilitarJogo() {
    document.getElementById('palpite').disabled = true;
    document.querySelector('button').disabled = true;
}

//Verifica se o jogador possui tentativas restantes
function verificaTentativa(resultado) {
    if (numeroTentativas === 0) {
        resultado.innerHTML = `Você perdeu! O número secreto era ${numeroAleatorio}`;
        desabilitarJogo();
        return;
    }
}


function chutar() {
    const palpite = Number(pegaValor('palpite').value)
    const resultado = pegaValor('resultado')
    
    if (palpite < 1 || palpite > 100) {
        window.alert(`[ERRO] Digite um número entre 1 e 100`)
        return
    }
    
    if (palpite < numeroAleatorio) {
        resultado.innerHTML = "O número secreto é maior"
        numeroTentativas -= 1
        atualizaTentativa()
        limpaInput()
        verificaTentativa(resultado)
        return
    } else if (palpite > numeroAleatorio) {
        resultado.innerHTML = 'O número secreto é menor'
        numeroTentativas -= 1
        atualizaTentativa()
        limpaInput()
        verificaTentativa(resultado)
        return
    } else if (palpite == numeroAleatorio) {
        resultado.innerHTML = 'Parabéns você acertou!'
        limpaInput()
        desabilitarJogo()
        verificaTentativa(resultado)
        return
    }
}



