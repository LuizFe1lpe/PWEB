var selected_curso;

function SalvaCurso(){
    selected_curso = document.getElementById("cursos").value;
    console.log(selected_curso);
}

function Abrir(){
    var resultado = confirm("Deseja realemnte abrir essa página?");

    if(resultado){
        if(selected_curso == "ADS"){
            window.open("http://fatecsorocaba.edu.br/curso_ads.asp","_blank");
        }
        else if(selected_curso == "EA"){
            window.open("http://fatecsorocaba.edu.br/curso_ea.asp","_blank");
        }
        else if(selected_curso == "FM"){
            window.open("http://fatecsorocaba.edu.br/curso_fm.asp","_blank");
        }
    }
    else{
        alert("Não iremos abrir essa página");
    }
}