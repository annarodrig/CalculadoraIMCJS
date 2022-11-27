// Definindo as variaveis que irão pegar os campos no DOM

let pesoUsuario = null;
let alturaUsuario = null;
let botaoCalcula = null;
let paragrafoResultado = null;
let exibeIMC = null;
let exibeSituaco = null;

// Armazena os dados do usuario neste objeto
let dadosUsuario = {
    altura: null,
    massa: null
}

// Evento que ocorre quando o DOM for carregado 
document.addEventListener("DOMContentLoaded", iniciar);

const iniciar = () => {

    // Obtendo os campos necessários do DOM
    pesoUsuario = document.getElementById("peso");
    alturaUsuario = document.getElementById("altura");
    botaoCalcula = document.getElementById("calcula");
    paragrafoResultado = document.getElementById("divCalculos");
    exibeIMC = document.getElementById("resultadoIMC");
    exibeSituaco = document.getElementById("resultadoSituacao");

    // Armazenando os valores nas propriedades de "dadosUsuario" quando os campos mudam
    pesoUsuario.addEventListener("change", () => dadosUsuario.peso = Number(pesoUsuario.value));

    alturaUsuario.addEventListener("change", () => dadosUsuario.altura = Number(alturaUsuario.value));

        // Cria função que testa se o verifica a situação que o usuário esta de acordo com seu IMC

        function testaSituacao(valorIMC) {
            let imc = Number(valorIMC);
    
            if (imc < 17)
            {
                return("Diagnóstico: Muito abaixo do peso" );
            }
            else if (imc < 18.50 )
            {
                return("Diagnóstico: Abaixo do peso" );
            }
            else if ( imc < 25)
            {
                return("Diagnóstico: Peso normal" );
            }
            else if (imc < 30)
            {
                return("Diagnóstico: Acima do peso" );
            }
            else if (imc < 35)
            {
                return("Diagnóstico: Obesidade |" );
            }
            else if (imc < 40)
            {   
                return("Diagnóstico: Obesidade ||(severa)" );
            }
            else if (imc > 40)
            {
                return("Diagnóstico: Obesidade |||(mórbida)" );
            }
    
    }

    // Cria função que calcula o IMC do usuário quando ele clicar no button e exibe os resultados do "paragrafoResultado"

    botaoCalcula.addEventListener("click", () => {
        if (dadosUsuario.altura != 0 && dadosUsuario.peso != 0){
            const valorIMC = (dadosUsuario.peso / (dadosUsuario.altura*dadosUsuario.altura));
            const situacaoUsuario = testaSituacao(valorIMC);

            paragrafoResultado.innerText = `${valorIMC} kg/m².`;
            paragrafoResultado.innerText = `${situacaoUsuario}`;
            divCalculos.hidden = 0;
        } else {
            alert("Insira valores válidos!");
        }
    });
}
