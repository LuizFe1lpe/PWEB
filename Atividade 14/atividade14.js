function Limpar(){  
        document.form1.rest();
}
function Enviar(){
    console.log("check");
    if(document.getElementById("nao").checked == true){
        alert("Que bom que vocêvoltou a visitar esta página!");
    }
    else{
        alert("Volte sempre à estápágina");
    }
}