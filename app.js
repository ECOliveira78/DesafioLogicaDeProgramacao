
//Criando jodo do numero secreto com JS.

//mensagem de boas vindas
alert('Seja bem vindos ao jogo do número secreto');

//Criando uma variável para armazenar um numero máximo
let numeroMaximo = 10;

//criando a variável que armazena o numero a ser descoberto, sendo gerado automaticamente.
let numeroSecreto = Math.floor(Math.random() * numeroMaximo +1 );
console.log(numeroSecreto);

//variável para armazenar a tentativa ou chute
let chute;

//variável para armazenar a quantidade de tentativas
let tentativas = 1;

//enquanto o numero chutado não for acertado
while (chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 a ${numeroMaximo}`);
    if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`)
        } else {
	        alert(`O numero secreto é maior que ${chute}`)
	    }
        //tentativas = tentativa + 1;
	    tentativas++;  	
    } 
     
	
}
//operador ternário, 
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
    alert(`Parabens! Voçê acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);






