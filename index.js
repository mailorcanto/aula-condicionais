//AULA CONDICIONAIS

/*
//Exercício 1. Crie uma função que:
//● Recebe 2 números (chamaremos de num1 e num2)
//● Compara esses números entre si:
//○ Se os números forem iguais, retorna uma mensagem de sucesso
//Depois, chame a função com números que foram inseridos pelo usuário através do prompt.


function comparar (num1, num2){

var num1 = Number(prompt('Digite um número:'))
var num2 = Number(prompt('Digite outro número:'))

    if (num1 === num2){
    console.log('Os números são iguais!')
    }
    return console.log(num1+' e '+num2);

}

comparar();
*/

/*
//Exercício 2. Crie uma função que:
//● Recebe 2 números (chamaremos de num1 e num2)
//● Compara esses números entre si:
//○ Retorna mensagens dizendo se os números são iguais ou diferentes
//Depois, chame a função com números que foram inseridos pelo usuário através do prompt

function comparar (num1, num2){

    var num1 = Number(prompt('Digite um número:'))
    var num2 = Number(prompt('Digite outro número:'))
    
        if (num1 === num2){
        console.log('Os números são iguais!')
        }
    
        else {
        console.log('Os números não são iguais!')
        }

    return console.log(num1+' e '+num2);
    }

comparar();
*/


//Exercício 3. Crie uma função que:
//● Recebe 2 números (chamaremos de num1 e num2)
//● Compara esses números entre si:
//○ Retorna mensagens dizendo se o primeiro número é {maior/menor/igual} ao segundo número
//Depois, chame a função com números que foram inseridos pelo usuário através do prompt

/*
function comparacoes (num1, num2){
    num1 = Number(prompt('Digite um número'));
    num2 = Number(prompt('Digite outro número'));

    if (num1 > num2) {                //Observação: também é possível acrescentar E (&&) e OU (||) a um if, caso necessário
        console.log('O primeiro número é MAIOR que o segundo!');
    }
    else if (num1 < num2) {
        console.log('O primeiro número é MENOR que o segundo');
    }
    else {
        console.log('Os números são IGUAIS!');
    }
    return console.log(+num1+' e '+num2);

    }

comparacoes();
*/


/*
//Exercício 4. Escreva um programa que receba o Pokémon inicial escolhido pela pessoa e imprima no console o seu tipo:
//● Bulbasauro (Planta e Veneno)
//● Charmander (Fogo)
//● Squirtle (Água)

let pokemon = prompt('Digite seu Pokémon');

switch (pokemon){
    case 'Bulbasauro':
        console.log('Planta e Veneno')
        break
    case 'Charmander':
        console.log('Fogo')
        break
    case 'Squirtle':
        console.log('Água')
        break
    default:
        console.log('Não encontrado')
        break        
}
*/

/*
//Exercício 5. Uma pessoa pode estudar em uma faculdade se:
//● Tiver concluído o ensino médio
//● Tiver 18 anos ou mais
//● Não estiver cursando outra faculdade
//Escreva uma função que receba estes parâmetros e devolva se a pessoa pode ou não estudar nesta faculdade. Receba os dados do usuário pelo prompt 
//e execute a função.

function matricula (){
let ensinoMedio = prompt('Informe se candidato já concluiu ensino médio (s ou n):');
let idade = Number(prompt('Informe a idade do candidato'));
let cursandoFaculdade = prompt('Informe se candidato está cursando outra faculdade(s ou n):');

if (ensinoMedio =='s' && idade >= 18 && cursandoFaculdade == 'n') {
    console.log('Candidato está apto a realizar a matricula')
}
else {
    console.log('Candidato não está apto a realizar a matricula')
}
}
matricula();
*/


//Exercícios de interpretação de código

/*
//1. Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//a) Explique o que o código faz. Qual o teste que ele realiza? = Testa se o valor informado é par ou ímpar (resto = 1 ímpar, resto 0 = par)

//b) Para que tipos de números ele imprime no console "Passou no teste"? = números pares

//c) Para que tipos de números a mensagem é "Não passou no teste"? = números ímpares
*/

/*
//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima? = para retornar o preço de uma fruta conforme o nome digitado

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? = O preço da fruta Maçã é R$ 2.25

//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo 
//acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? O switch vai seguir até seu final e retornar o último valor, do 
//default (de 5)
*/

/*
//3. Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a) O que a primeira linha está fazendo? = Está solicitando a digitação de um número

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? = Se for 10 vai retornar: 
//'Esse número passou no teste' e uma mensagem de erro para a variável mensagem. Se digitar -10: apenas retorna erro para a variável mensagem.

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. = A variável mensagem é de escopo local, pertence ao if.
//Logo, não pode ser retornada por console.log fora do bloco if, como está sendo neste código. ps: um BLOCO é qualquer variável que utilize chaves{}
*/


//Exercícios de escrita de código

/*
//1. 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, 
//caso contrário, imprima `"Você não pode dirigir."`

var podeDirigir = Number(prompt('Informe sua idade:'));

if (podeDirigir >= 18){
    console.log('Você pode dirigir!')
}
else {
    console.log('Você NÃO pode dirigir!')
}
*/

/*
//2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turno = prompt('Digite turno em que estuda (m, v ou n)');

if (turno == 'm'){
    console.log('Bom Dia!')
}
else if (turno =='v'){
    console.log('Boa Tarde!')
}
else if (turno=='n'){
    console.log('Boa Noite!') 
}
else {
    console.log('Informe m para Matutino, v para Vespertino ou n para Noturno.')
}
*/

/*
//3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turno = prompt('Digite turno em que estuda (m, v ou n)');

switch (turno){
    case 'm':
        console.log('Bom Dia!')
        break
    case 'v':
        console.log('Boa Tarde!')
        break
    case 'n':
        console.log('Boa Noite!')
        break
    default:
        console.log('Informe m para Matutino, v para Vespertino ou n para Noturno.')
        break    
}
*/

/*
//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
//e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre 
//o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: 
//"Bom filme!", caso contrário, imprima "Escolha outro filme :("

var generoFilme = prompt('Digite o gênero do filme que quer assistir:')
var precoIngresso = Number(prompt('Digite o preço do ingresso:'))

if (generoFilme == 'fantasia' && precoIngresso < 15){
    console.log('Bom Filme!')
}
else {
    console.log('Escolha outro filme :(')
}
*/


//DESAFIOS

/*
//1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt 
//qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", 
//trocando [LANCHINHO] pelo que o usuário colocou no input.

var generoFilme = prompt('Digite o gênero do filme que quer assistir:')
var precoIngresso = Number(prompt('Digite o preço do ingresso:'))

if (generoFilme == 'fantasia' && precoIngresso < 15){
    var lanchinho = prompt('Qual lanche você vai comprar?')
    console.log('Bom Filme!')
    console.log('Aproveite o seu '+lanchinho)
}
else {
    console.log('Escolha outro filme :(')
}
*/


//2. 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve 
//fornecer algumas informações:
//- Nome completo;
//- Tipo de jogo: IN indica internacional; e DO indica doméstico;
//- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//- Categoria: pode ser as opções 1, 2, 3 ou 4;
//- Quantidade de ingressos
    
//O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso,  junto com o valor de 
//cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela  quantidade). 
//Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos  internacionais é o mesmo 
//de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

var nome = prompt('Informe seu nome completo');

const formatNumber = {
    style: "currency",
    currency: "BRL"}

var tipoJogo = prompt("Informe 'in' para jogo internacional e 'do' para jogo doméstico");

function dolares (ingresso,quantidadeIngressos){
    console.log('---Valores---')
    var ingresso;
    var dolar = 4.1;
    var valorInicial = ingresso * dolar;
    console.log('Valor do ingresso:',new Intl.NumberFormat('pt-BR', formatNumber).format(valorInicial))
    var valorTotal = quantidadeIngressos * valorInicial;
    console.log('Valor total:',new Intl.NumberFormat('pt-BR', formatNumber).format(valorTotal))   
}

function reais (ingresso,quantidadeIngressos){
    console.log('---Valores---')
    var ingresso;
    console.log('Valor do ingresso:',new Intl.NumberFormat('pt-BR', formatNumber).format(ingresso));
    var valorTotal = ingresso * quantidadeIngressos;
    console.log('Valor total:',new Intl.NumberFormat('pt-BR', formatNumber).format(valorTotal));
}


if (tipoJogo == 'in'){

    var etapaJogo = prompt("Informe 'sf' para semi-final, 'dt' para terceiro lugar ou 'fi' para final");

    if (etapaJogo == 'sf'){
        var categoria = Number(prompt('Informe categoria (1, 2, 3 ou 4):'))
        switch (categoria){
            case 1:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(1320,quantidadeIngressos);
                break
            case 2:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(880,quantidadeIngressos);
                break           
            case 3:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(550,quantidadeIngressos);
                break
            case 4:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(220,quantidadeIngressos);
                break
            default:
                console.log('Informe categoria entre 1 e 4')
                break                    

        }
    }
    else if (etapaJogo == 'dt'){
        var categoria = Number(prompt('Informe categoria (1, 2, 3 ou 4):'))
        switch (categoria){
            case 1:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(660,quantidadeIngressos);
                break
            case 2:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(440,quantidadeIngressos);
                break                
            case 3:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(330,quantidadeIngressos);
                break
            case 4:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(170,quantidadeIngressos);
                break
            default:
                console.log('Informe categoria entre 1 e 4')                    
                break
        }
    }
    else if (etapaJogo == 'fi'){
        var categoria = Number(prompt('Informe categoria (1, 2, 3 ou 4):'))
        switch (categoria){
            case 1:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(1980,quantidadeIngressos);
                break
            case 2:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(1320,quantidadeIngressos);
                break                
            case 3:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(880,quantidadeIngressos);
                break
            case 4:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                dolares(330,quantidadeIngressos);
                break
            default:
                console.log('Informe categoria entre 1 e 4')                    
                break
        }
    }
    else {
        console.log("ERRO! Digite 'sf' para Semifinais, 'dt' para Decisão de 3º lugar ou 'fi' para Final");
    }
}
else if (tipoJogo == 'do'){

    var etapaJogo = prompt("Informe 'sf' para semi-final, 'dt' para terceiro lugar ou 'fi' para final");

    if (etapaJogo == 'sf'){
        var categoria = Number(prompt('Informe categoria (1, 2, 3 ou 4):'))
        switch (categoria){
            case 1:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(1320,quantidadeIngressos);
                break
            case 2:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(880,quantidadeIngressos);
                break                
            case 3:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(550,quantidadeIngressos);
                break
            case 4:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(220,quantidadeIngressos);
                break
            default:
                console.log('Informe categoria entre 1 e 4')                    
                break
        }
    }
    else if (etapaJogo == 'dt'){
        var categoria = Number(prompt('Informe categoria (1, 2, 3 ou 4):'))
        switch (categoria){
            case 1:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(660,quantidadeIngressos);
                break
            case 2:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(440,quantidadeIngressos);
                break                
            case 3:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(330,quantidadeIngressos);
                break
            case 4:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(170,quantidadeIngressos);
                break
            default:
                console.log('Informe categoria entre 1 e 4')                    
                break
        }
    }
    else if (etapaJogo == 'fi'){
        var categoria = Number(prompt('Informe categoria (1, 2, 3 ou 4):'))
        switch (categoria){
            case 1:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(1980,quantidadeIngressos);
                break
            case 2:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(1320,quantidadeIngressos);
                break                
            case 3:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                reais(880,quantidadeIngressos);
                break
            case 4:
                var quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja:'))
                var ingresso = (330,quantidadeIngressos);
                break
            default:
                console.log('Informe categoria entre 1 e 4')                    
                
        }
    }
    else {
        console.log("ERRO! Digite 'sf' para Semifinais, 'dt' para Decisão de 3º lugar ou 'fi' para Final");
    }
}
else {
    console.log("ERRO! Digite 'in' para jogo internacional ou 'do' para jogo doméstico");
}


console.log('---Dados da compra---') 

console.log('Nome do cliente: '+nome)

if (tipoJogo == "do"){
    console.log('Tipo de jogo: Nacional')
}
else if (tipoJogo == "in"){
    console.log('Tipo de jogo: Internacional')
} 

else {
    console.log('Erro de cadastro')

}

if (etapaJogo == 'sf'){
    console.log('Etapa do jogo: Semifinal')
}
else if(etapaJogo == 'dt'){
    console.log('Etapa do do jogo: Decisão de terceiro lugar')
}
else if(etapaJogo == 'fi'){
    console.log('Etapa do jogo: Final')
}
else {
    console.log('Erro de cadastro')
}

console.log('Categoria: '+categoria);
console.log('Quantidade de Ingressos: '+quantidadeIngressos)
















