//Validação menos codigo e com loop
var titulo = document.querySelector(".titulo");
var button = document.querySelector("#adicionar-paciente");

var pacientes= document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var infoPeso = paciente.querySelector(".info-peso");
    var peso = infoPeso.textContent;

    var infoAltura = paciente.querySelector(".info-altura");
    var altura = infoAltura.textContent;

    var infoImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);


    if(!validaPeso(peso)){
        alert('Digite peso valido');
        infoPeso.textContent='[ERRO] Peso invalido';
        paciente.classList.add("pacienteInvalido");
        pesoEhValido=false;
    }
    if(!validaAltura(altura)){
        alert('Digite altura valida');
        paciente.classList.add("pacienteInvalido");
        infoPeso.textContent='[ERRO] altura invalido';
        alturaEhValida=false;
    }
    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura)
        infoImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso>0 && peso<1000){
        return true
    }else{
        return false
    }

}
function validaAltura(altura){
    if(altura>0 & altura<3.00){
        return true
    }else{
        return false
    }
}

/*Validação com muito mais codigo

//Peimeiro paciente
var primeiroPaciente= document.querySelector("#primeiro-paciente");
var pInfoNome = primeiroPaciente.querySelector(".info-nome");
var pInfoPeso = primeiroPaciente.querySelector(".info-peso");
var pInfoAltura = primeiroPaciente.querySelector(".info-altura");
var pInfoGordura = primeiroPaciente.querySelector(".info-gordura");
var pInfoImc = primeiroPaciente.querySelector(".info-imc");
var pPeso = pInfoPeso.textContent

if(pPeso <= 0 || pPeso >= 1000){
    alert('[ERRO]')
    pInfoImc.textContent = '[ERRO]';
    pInfoPeso.textContent = '[ERRO]';
}else{
    var pAltura = pInfoAltura.textContent
    var pGordura = pInfoGordura.textContent
    var pImc = pInfoImc.textContent
    pInfoImc.textContent = pPeso/(pAltura*pAltura);
}



//------------------------------------------------------------

//Segundo paciente
var segundoPaciente= document.querySelector("#segundo-paciente");
var sInfoNome = segundoPaciente.querySelector(".info-nome");
var sInfoPeso = segundoPaciente.querySelector(".info-peso");
var sInfoAltura = segundoPaciente.querySelector(".info-altura");
var sInfoGordura = segundoPaciente.querySelector(".info-gordura");
var sInfoImc = segundoPaciente.querySelector(".info-imc");
var sPeso = sInfoPeso.textContent


if(sPeso <= 0 || sPeso >= 1000){
    alert('[ERRO]')
    sInfoImc.textContent = '[ERRO]';
    sInfoPeso.textContent = '[ERRO]';
}else{
    var sAltura = sInfoAltura.textContent
    var sGordura = sInfoGordura.textContent
    var sImc = sInfoImc.textContent
    sInfoImc.textContent = sPeso/(sAltura*sAltura);
}

//------------------------------------------------------------

//terceiro paciente
var terceiroPaciente = document.querySelector("#terceiro-paciente");
var tInfoNome = terceiroPaciente.querySelector(".info-nome");
var tInfoPeso = terceiroPaciente.querySelector(".info-peso");
var tInfoAltura = terceiroPaciente.querySelector(".info-altura");
var tInfoGordura = terceiroPaciente.querySelector(".info-gordura");
var tInfoImc = terceiroPaciente.querySelector(".info-imc");
var tPeso = sInfoPeso.textContent

if(tPeso <= 0 || tPeso >= 1000){
    alert('[ERRO]')
    tInfoImc.textContent = '[ERRO]';
    tInfoPeso.textContent = '[ERRO]';
}else{
    var tAltura = tInfoAltura.textContent
    var tGordura = tInfoGordura.textContent
    var tImc = tInfoImc.textContent
    tInfoImc.textContent = tPeso/(tAltura*tAltura);
}
//------------------------------------------------------------

//quarto paciente
var quartoPaciente= document.querySelector("#quarto-paciente");
var qInfoNome = quartoPaciente.querySelector(".info-nome");
var qInfoPeso = quartoPaciente.querySelector(".info-peso");
var qInfoAltura = quartoPaciente.querySelector(".info-altura");
var qInfoGordura = quartoPaciente.querySelector(".info-gordura");
var qInfoImc = quartoPaciente.querySelector(".info-imc");
var qPeso = qInfoPeso.textContent

if(qPeso <= 0 || qPeso >= 1000){
    alert('[ERRO]')
    qInfoImc.textContent = '[ERRO]';
    qInfoPeso.textContent = '[ERRO]';
}else{
    var qAltura = qInfoAltura.textContent
    var qGordura = qInfoGordura.textContent
    var qImc = qInfoImc.textContent
    qInfoImc.textContent = qPeso/(qAltura*qAltura);
}
//------------------------------------------------------------

//quinto paciente
var quintoPaciente= document.querySelector("#quinto-paciente");
var quiInfoNome = quintoPaciente.querySelector(".info-nome");
var quiInfoPeso = quintoPaciente.querySelector(".info-peso");
var quiInfoAltura = quintoPaciente.querySelector(".info-altura");
var quiInfoGordura = quintoPaciente.querySelector(".info-gordura");
var quiInfoImc = quintoPaciente.querySelector(".info-imc");

var quiPeso = quiInfoPeso.textContent

if(quiPeso <= 0 || quiPeso >= 1000){
    alert('[ERRO]')
    quiInfoImc.textContent = '[ERRO]';
    quiInfoPeso.textContent = '[ERRO]';
}else{
    var quiAltura = quiInfoAltura.textContent
    var quiGordura = quiInfoGordura.textContent
    var quiImc = quiInfoImc.textContent
    quiInfoImc.textContent = quiPeso/(quiAltura*quiAltura);
}
*/


