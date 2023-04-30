var qnt = 0;

//primeira forma
class Aluno{
    constructor(ra, nome){
        this.RA = ra;
        this.Nome = nome;
    }
}   

function CriaAluno(){
    qnt++;
    console.log(qnt);

    let txtra = document.getElementById('text_RA').value;
    let txtnome = document.getElementById('text_Nome').value;

    if(qnt == 1){
        const aluno1 = new Aluno(txtra,txtnome);
        CriarElementoVisual(aluno1.RA, aluno1.Nome);
        console.log("primeira forma");
    }
    else if(qnt == 2){
        //segunda forma
        const aluno2 = {RA: txtra, Nome: txtnome};
        CriarElementoVisual(aluno2.RA, aluno2.Nome);
        console.log("segunda forma");
    }
    else{
        //terceira forma
        const aluno3 = new Object();
        aluno3.RA = txtra;
        aluno3.Nome = txtnome;   
        CriarElementoVisual(aluno3.RA, aluno3.Nome);
        console.log("terceira forma");
    }
}
function CriarElementoVisual(a, b){
    var novaDiv = document.createElement("div");
    var titulo = document.createTextNode("Aluno " + qnt);
    var pra = document.createTextNode(" RA: " + a);
    var pnome = document.createTextNode(" Nome: " + b);
   
    novaDiv.appendChild(titulo);
    novaDiv.appendChild(pra);
    novaDiv.appendChild(pnome);

    var divAtual = document.getElementById("div1");
    document.body.insertBefore(novaDiv, divAtual);

    alert("Novo aluno adicionado");
}
//console.log(aluno1.RA + " " + aluno1.Nome + " " + "\n" + aluno2.RA + " " + aluno2.Nome + " " +"\n" + aluno3.RA + " " + aluno3.Nome);