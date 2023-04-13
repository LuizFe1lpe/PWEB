alert("Escolhas entre pedra, papel e tesoura");
let valor = "";

function Pedra(){
    valor = "pedra";
    Compara(valor,Oponente());
}
function Papel(){
    valor = "papel";
    Compara(valor,Oponente());
}
function Tesoura(){
    valor = "tesoura";
    Compara(valor,Oponente());
}
function Oponente(){
    let escolha = Math.floor(Math.random() * 3 + 1);
    let maoOponente;

    if(escolha == 1){
        maoOponente = "pedra";
    }
    else if(escolha == 2){
        maoOponente = "papel";
    }
    else{
        //3
        maoOponente = "tesoura";
    }
    console.log(maoOponente);
    return maoOponente;
}
function Compara(a,b){
    let resultado = "Você escolheu: " + a + "\n" + "Computador escolheu: " + b + "\n-----------------------\n";
    if(a === b){
        alert("Empate, ninguém ganhou");
    }
    else{
        if(a === "pedra" && b === "papel"){
            alert(resultado + "Papel cobre pedra, você perdeu");
        }
        if(a === "pedra" && b === "tesoura"){
            alert(resultado + "Pedra quebra tesoura, você ganhou");
        }
        if(a === "papel" && b == "pedra"){
            alert(resultado + "Papel cobre pedra, você ganhou");
        }
        if(a === "papel" && b == "tesoura"){
            alert(resultado + "Tesoura corta papel, você perdeu");
        }
        if(a === "tesoura" && b == "pedra"){
            alert(resultado + "Pedra quebra tesoura, você perdeu");
        }
        if(a === "tesoura" && b == "papel"){
            alert(resultado + "Tesoura corta papel, você ganhou");
        }
    }
    //location.reload();// recarrega página
}