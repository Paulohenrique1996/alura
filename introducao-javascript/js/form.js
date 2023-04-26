button.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    

    var caixaErro = document.querySelector(".caixa__erro")

    var paciente = obterInfoPaciente(form);
    

    caixaErro.textContent = ''
    
    var erros = validaPaciente(paciente)
    
    
    if (erros.length > 0){
        
        
        for( var i = 0;i < erros.length; i++){
            var p = document.createElement ("p")
            p.classList.add("text__erro")
            p.textContent = erros[i]
            caixaErro.appendChild(p)
        }

        form.reset();
        return
    }
    

    adicionaPacienteNaTabela(paciente)
    
    form.reset();
    

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montarTr(paciente);
    var pacienteTb = document.querySelector("#tabela-pacientes");
    pacienteTb.appendChild(pacienteTr);
}

function obterInfoPaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montarTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));
    
    return pacienteTr
}

function montarTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}
 function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0) erros.push ("[ERRO] Compo do nome em branco ");
    if(paciente.gordura.length == 0) erros.push ("[ERRO] Compo de gordura em branco ");
    if(!validaAltura(paciente.altura)) erros.push ("[ERRO] Digite altura valida! ");
    if(!validaPeso(paciente.peso)) erros.push("[ERRO] Digite peso valido! ");
    
    return erros;
 }
 function validaForm(paciente){
    if(paciente.nome.length == 0 || paciente.peso.length == 0 || paciente.altura.length == 0 || paciente.gordura.length == 0){
        return true
    }
    
    
 }
