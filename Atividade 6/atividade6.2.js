nome = prompt("Qual o seu nome");

function Calcular(){
    let soma = 0;
    let sub = 0;
    let mult = 0;
    let div = 0;
    let rest = 0;

    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    
    soma = numero1 + numero2;
    sub = numero1 - numero2;
    mult = numero1 * numero2;
    div = numero1 / numero2;
    rest = numero1 % numero2;

    if(typeof(numero1) !== null && typeof(numero2) !== null){
        return nome + 'Os resultados são: ' + 'A soma é: ' + soma + ` A subtração é: ` + sub + ` A multiplicação é: ` + mult + ` A divisão é: ` + div + ` O resto inteiro é: ` + rest;
    } 
}
