///////////////////////////////Desafio/////////////////////////////
//1 Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert('Seja bem vindo ao curso de lógica de programação da Alura');

//2 Declare uma variável chamada nome e atribua a ela o valor "Lua".
//let nome = 'Lua';

//3 Crie uma variável chamada idade e atribua a ela o valor 25.
//let idade = 25;

//4 Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

//5 Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

//6 Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert('Erro! Preencha todos os capos');

//7 Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = ('Erro! Preencha todos os campos')
alert (`${mensagemDeErro}`);

//8 Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let nome = prompt('Informe seu nome');
//alert(`${nome}`);

//9 Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let idade = prompt('Informe sua idade');
//alert(`${idade}`);
//10 Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(idade >=18){
    alert(`${nome} voçê é maior de idade, já pode tirar habilitação`)
}else{
    alert(`${nome} voçê é menor de idade, ainda não pode ser habilitado`);
}
