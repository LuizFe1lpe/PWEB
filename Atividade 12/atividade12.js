function abrirJanela(obj){
    obj.setAttribute("src", "https://static.vecteezy.com/ti/vetor-gratis/p3/1750426-janela-de-madeira-aberta-com-venezianas-vetor.jpg");
    document.getElementById("txtJanela").innerHTML = "Fechar a Janela";
}

function fecharJanela(obj){
    obj.setAttribute("src", "https://static.vecteezy.com/ti/vetor-gratis/p3/1750481-veneziana-fechada-janela-madeira-com-floreira-vetor.jpg");
    document.getElementById("txtJanela").innerHTML = "Abrir a Janela";
}

function quebrarJanela(obj){
    obj.setAttribute("src","https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/251565/159001_101932.jpeg");
    document.getElementById("txtJanela").innerHTML = "A Janela Quebrou";
}