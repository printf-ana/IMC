function calcularIMC(){
	var indice,name,nasc,hoje,idade,sex,cl,cl2;
  hoje=new Date;
  sex=formDados.sexo.value;
  name=formDados.nome.value;
  nasc=formDados.AnodeNasc.value;
	
  nasc=parseInt(nasc);
	
  idade=hoje.getFullYear();
  idade=idade-nasc;
	indice=imc();
  cl=classificacao(idade);
  if(cl=="Adulto")
  {
    cl2=adultoIMC(indice);
  }
  else if(cl=="Idoso")
  {
    cl2=idosoIMC(indice);
  }
  else{
    cl2=jovemIMC(indice);
  }
 
  document.getElementById("iRes").innerHTML="Olá "+name+", você é um "+cl+" e tem "+idade+" anos, é do sexo "+sex+", e o seu IMC é de: "+indice.toFixed(2)+" e sua classificação é "+cl2+".";
  if(sex=="Feminino")
  {
  document.getElementById("iesp").innerHTML=" Os valores podem variar de acordo com o percentil(semanas e dias em relação a idade) e em caso de gravidez ,o peso, para resultados mais especificos procure um médico."
  }
  else{
     document.getElementById("iesp").innerHTML=" Os valores podem variar de acordo com o percentil(semanas e dias em relação a idade), para resultados mais especificos procure um médico."
  }
}
function classificacao(idade){
  var cla,classifica;
  if(idade>20&&idade<65)
  {
    classifica="Adulto";
    
  }
  else if(idade>=65)
  {
    classifica="Idoso";
  }
  else
  { 
    classifica="Jovem";
  }
  return (classifica);
}
function imc(){
  var p,h,imc1;
  p=formDados.peso.value;
  h=formDados.altura.value;
  p=parseFloat(p);
  h=parseFloat(h);
  imc1=p/(h*h);
 return imc1;

  }
  //caso esteja gravida o imc pode variar de acordo com o peso,para resultados mais especificos procure um especialista
//+" os valores podem variar de acordo com o percentil(semanas e dias em relação a sua idade), para resultados mais especificos procure um médico especialista."
function adultoIMC(imc){
  var t;
  if(imc<18.5){
    t="Baixo peso";
  }
  if(imc>=18.5&&imc<24.9)
  {
    t="Normoponderal";
  }
  if(imc>=25&&imc<29.9){
    t="Pré-obesidade";
  }
  if(imc>=30&&imc<34.9){
    t="Obesidade,grau I";
  }
  if(imc>=35&&imc<39.9){
    t="Obesidade,grau II";
  }
  if(imc>=40){
    t="Obesidade mórbida";
  }
  return t;
}

function idosoIMC(imc){
  var t;
  if(imc<22){
    t="Magreza";
  }
  else if(imc>22&&imc<27){
    t="Eutrofia(normoponderal)";
  }
  else{
    t="Excesso de peso";
  }
  return t;
}
function jovemIMC(imc){
  var t;
  if(imc<18.5){
    t="Baixo peso";
  }
  if(imc>=18.5&&imc<24.9){
    t="Normoponderal";
    }
  if(imc>=25&&imc<29.9){
    t="Excesso de peso";
    }
  if(imc>30){
    t="Obesidade";
  }
  return t;

}
