nome = prompt("Qual o seu nome");

function CalcularMedia(){
    let media = 0;

    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    let numero3 = parseInt(document.getElementById('num3').value);

    media = nome + " a média é: " + (numero1 + numero2 + numero3)/3;

    return media;
}
