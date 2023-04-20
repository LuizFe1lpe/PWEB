const qnt = 45;
var sum = 0 ;
let sumGreatnGood = 0;
let age = [];

let avgAge;
let oldest; 
let youngest;
let amountAwful = 0;
let percentGreatnGood;
let amountMen = 0;
let amountWeman = 0;

for(let i = 0; i<qnt; i++){
    age[i] = prompt("Qual a sua idade?");
    let sexo = prompt("Qual seu sexo? H = Homem ou M = Mulher");
    let opinion = prompt("De 1 a 4, qual a sua opinião");

    sum += Number(age[i]);
    //console.log("soma " + sum);
    
    if(opinion == 1){
        amountAwful++;
        console.log("quantidade de notas ruins " + amountAwful);
    }
    if(opinion == 3 || opinion == 4){
        sumGreatnGood++;
        //console.log("soma das melhores notas " + sumGreatnGood);
    }
    //console.log("sexo " + sexo);
    if(sexo == "Mulher" || sexo == "M"){
        amountWeman++;
        //console.log("quantidade mulheres " + amountWeman);
    }
    if(sexo == "Homem" || sexo == "H"){  
        amountMen++; 
        //console.log("quantidade homens " + amountMen);
    }
}

avgAge = sum/qnt;
percentGreatnGood = (sumGreatnGood*100)/qnt;
oldest = Math.max(...age);
youngest = Math.min(...age);

alert("A média de idade dos intrevistados é: " + avgAge);
alert("A idade do mais velho é: " + oldest);
alert("A idade do mais jovem é: " + youngest);
alert("A quantidade de pessoas que responderam péssimo é: " + amountAwful);
alert("A porcentagem de pessoas que responderam ótimo ou bom é: " + percentGreatnGood + "%");
alert("O número de mulheres é: " + amountWeman);
alert("O número de homens é: " + amountMen);