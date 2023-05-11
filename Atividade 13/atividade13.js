var maiuscula = document.getElementById("Maiuscula");
var minuscula = document.getElementById("Minuscula");

//maiuscula
function Upper(){
    document.getElementById("Minuscula").checked = false;
    document.getElementById("Texto").value = document.getElementById("Texto").value.toUpperCase();
}
//minuscula
function Lower(){
    document.getElementById("Maiuscula").checked = false;
    document.getElementById("Texto").value = document.getElementById("Texto").value.toLowerCase();
}
