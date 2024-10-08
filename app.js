// define uma mensagem de boas vindas ao programa
let mensagemDeBoasVindas = 'Boas vindas ao jogo do número secreto!';
alert(mensagemDeBoasVindas);

// define o multiplicador do nº secreto
let numeroMaximo = 200; 

// define o nº secreto, multiplica pela quantidade de dígitos que quer mais um (senão vai de 1 a 99 aqui)
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// declara o nº do chute
let numeroChute;

// define as tentativas
let tentativas = 1;

// enquanto o chute não for igual ao nº secreto
while (numeroChute != numeroSecreto) {
    numeroChute = prompt(`Escolha um número entre 01 e ${numeroMaximo}:`);
    // se o chute for igual ao nº secreto
    if (numeroChute == numeroSecreto) {
        // sai da repetição se for o nº certo
        break;
    } else {
        if (numeroChute > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroChute}!`);
        } else {
            alert(`O número secreto é maior que ${numeroChute}!`);
        }
        tentativas++;
    }
}

// operador ternário para a palavra "tentativa/s"
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// template strings para usar variáveis no texto, com os acentos graves e o ${}
alert(`Boa! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);