// Definindo as variaveis que irão pegar os campos no DOM

let pesoUsuario = null;
let alturaUsuario = null;
let botaoCalcula = null;
let exibeIMC = null;
let exibeSituacao = null;
let paragrafoResultado = null;

// Armazena os dados do usuario neste objeto
let dadosUsuario = {
    altura: null,
    peso: null
}

// Evento que ocorre quando o DOM for carregado 
document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    // Obtendo os campos necessários do DOM
    pesoUsuario = document.getElementById("peso");
    alturaUsuario = document.getElementById("altura");
    botaoCalcula = document.getElementById("calcula");
    paragrafoResultado = document.getElementById("divCalculos");
    exibeIMC = document.getElementById("resultadoIMC");
    exibeSituacao = document.getElementById("resultadoSituacao");

    // Armazenando os valores nas propriedades de "dadosUsuario" quando os campos mudam
    pesoUsuario.addEventListener("change", () => dadosUsuario.peso = parseInt(pesoUsuario.value));

    alturaUsuario.addEventListener("change", () => dadosUsuario.altura = parseFloat(alturaUsuario.value));

    // Cria função que calcula o IMC do usuário quando ele clicar no button e exibe os resultados do "paragrafoResultado"

    botaoCalcula.addEventListener("click", (evt) => {
        evt.preventDefault();
        if (dadosUsuario.altura != 0 && dadosUsuario.peso != 0) {
            
            const valorIMC = (dadosUsuario.peso / (dadosUsuario.altura.toFixed(2) ** 2)).toFixed(2);
            const situacaoUsuario = testaSituacao(valorIMC);

            exibeIMC.innerText = `${valorIMC} kg/m².`;
            exibeSituacao.innerText = `${situacaoUsuario}`;
            paragrafoResultado.removeAttribute('hidden');
    
        }
    });

    // Cria função que testa se o verifica a situação que o usuário esta de acordo com seu IMC

    function testaSituacao(valorIMC) {

        let IMC = Number(valorIMC);

        switch (true) {
            case (IMC < 17):
                return "Muito abaixo do peso.";

            case (IMC < 18.5 ):
                return "Abaixo do peso."

            case (IMC < 25):
                return "Peso normal.";

            case (IMC < 30):
                return "Acima do peso.";

            case (IMC < 35):
                return "Obesidade.";

            case (IMC < 40):
                return "Obesidade severa.";

            case (IMC >= 40):
                return "Obesidade mórbida.";

            default:
                return "Um erro ocorreu.";
        }

    }

}
