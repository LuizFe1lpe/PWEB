let nums = [];

for(let i = 0; i<3; i++){
    nums[i] = prompt("Digite um número");
    //console.log("numero " + i + " " + nums[i]);
}
RetornaMaior(nums);
OrganizaValores();

function RetornaMaior(a){
    return alert("O maior número é: " + Math.max(...a));
}
function OrganizaValores(a, b){
    return alert(nums.sort((a, b) => a - b));
    //callbacks a = primeiro valor e b = segundo valor
}    