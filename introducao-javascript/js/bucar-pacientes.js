var bucarPaciente = document.querySelector("#buscar-paciente");

bucarPaciente.addEventListener("click", function(){
    var inputLink = document.querySelector("#link-paciente")
    var link = inputLink.value
    var xhr = new XMLHttpRequest();
    console.log(link)
    xhr.open("GET", link)
    xhr.send()
    xhr.addEventListener("load", function(){
    var menssagemErro = document.querySelector(".erro-link")
        if(xhr.status == 200 ){
            menssagemErro.textContent = ''
            var xhrResposta  = xhr.responseText
            var pacientes = JSON.parse(xhrResposta)
            pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente)
            });
        }else{
            menssagemErro.textContent = (`[ERRO] ${xhr.status} PAGINA NÃO ENCONTRADA`)
        }
    });
});
