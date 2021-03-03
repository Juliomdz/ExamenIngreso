/*
MÉNDEZ JULIO - DIVISION G.
Enunciado:
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, 
los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/
function mostrar()
{
  let nombreIngresado;
  let tipoCursadaIngresado;
  let cantidadMateriasIngresadas;
  let sexoIngresado;
  let notaPromedioIngresada;
  let edadIngresada;
  let banderaPrimerNoMasc=false; //para hallaer el mejor promedio no masculino.
  let nombreMejorPromedioNoMasc;
  let notaMejorPromedioNoMasc;
  let banderaPrimerLibre=false;
  let edadMasJovenLibre;
  let nombreMasJovenLibre;
  let contadorHombres=0;
  let acumuladorNotasHombres=0;
  let promedioNotaHombres=0;
  let contadorMujeres=0;
  let acumuladorNotasMujeres=0;
  let promedioNotaMujeres=0;
  let contadorNobinario=0;
  let acumuladorNotasNobinario=0;
  let promedioNotaNobinario=0;
  let cantidadMasMateriasNoRemotas;
  let nombreMasMateriasNoRemotas;
  let edadMasMateriasNoRemotas;
  let banderaPrimeroNoRemotas=false; //para hallar el que tiene mas.
  let botonContinuar=true;

  do
  {
    do
    {
      nombreIngresado=prompt("Ingrese el nombre del alumno:");
    }
    while(isNaN(nombreIngresado)==false || nombreIngresado=="");
    do
    {
      tipoCursadaIngresado=prompt("Ingrese el tipo de cursada:[libre][presencial][remota]");
    }
    while(tipoCursadaIngresado!="libre" && tipoCursadaIngresado!="presencial"&&tipoCursadaIngresado!="remota");
    do
    {
      cantidadMateriasIngresadas=parseInt(prompt("Ingrese la cantidad de materias:(maximo 8)"));
    }
    while(isNaN(cantidadMateriasIngresadas)==true || cantidadMateriasIngresadas<1 || cantidadMateriasIngresadas>8);
    do
    {
      sexoIngresado=prompt("Ingrese el sexo del alumno:[hombre][mujer][no binario]");
    }
    while(sexoIngresado!="hombre"&&sexoIngresado!="mujer"&&sexoIngresado!="no binario");
    do
    {
      notaPromedioIngresada=parseInt(prompt("Ingrese la nota promedio de dicho alumno:"));
    }
    while(isNaN(notaPromedioIngresada)==true || notaPromedioIngresada<0 || notaPromedioIngresada>10);
    do
    {
      edadIngresada=parseInt(prompt("Ingrese la edad de dicho alumno:"));
    }
    while(isNaN(edadIngresada)==true || edadIngresada<15 || edadIngresada>100);
    if (sexoIngresado!="hombre")
    {
      if (banderaPrimerNoMasc==false)
      {
        notaMejorPromedioNoMasc=notaPromedioIngresada;
        nombreMejorPromedioNoMasc=nombreIngresado;
        banderaPrimerNoMasc=true;  
      } 
      else if (notaMejorPromedioNoMasc< notaPromedioIngresada)
      {
        notaMejorPromedioNoMasc=notaPromedioIngresada;
        nombreMejorPromedioNoMasc=nombreIngresado;
      } 
    }
    if(tipoCursadaIngresado=="libre")
    {
      if (banderaPrimerLibre==false)
      {
        nombreMasJovenLibre=nombreIngresado;
        edadMasJovenLibre=edadIngresada;
        banderaPrimerLibre=true;  
      }
      else if (edadMasJovenLibre>edadIngresada)
      {
        nombreMasJovenLibre=nombreIngresado;
        edadMasJovenLibre=edadIngresada;
      }
    }
    switch (sexoIngresado)
    {
      case "hombre":
        contadorHombres++;
        acumuladorNotasHombres=acumuladorNotasHombres+notaPromedioIngresada;
        break;
      case "mujer":
        contadorMujeres++;
        acumuladorNotasMujeres=acumuladorNotasMujeres+notaPromedioIngresada;
        break;
      case "no binario":
        contadorNobinario++;
        acumuladorNotasNobinario=acumuladorNotasNobinario+notaPromedioIngresada;
        break;
    }
    if (tipoCursadaIngresado!="remota")
    {
      if (banderaPrimeroNoRemotas==false)
      {
        edadMasMateriasNoRemotas=edadIngresada;
        nombreMasMateriasNoRemotas=nombreIngresado;
        cantidadMasMateriasNoRemotas=cantidadMateriasIngresadas;
        banderaPrimeroNoRemotas=true;
      }
      else if (cantidadMasMateriasNoRemotas<cantidadMateriasIngresadas)
      {
        edadMasMateriasNoRemotas=edadIngresada;
        nombreMasMateriasNoRemotas=nombreIngresado;
        cantidadMasMateriasNoRemotas=cantidadMateriasIngresadas;
      }
    }
    botonContinuar=confirm("¿Desea ingresar otro alumno?")
  }
  while(botonContinuar==true);
  if (contadorHombres==0)
  {
    promedioNotaHombres="*no se ingresaron Hombres*";  
  }
  else
  {
    promedioNotaHombres=acumuladorNotasHombres/contadorHombres;
  }
  if (contadorMujeres==0)
  {
    promedioNotaMujeres="*No se ingresaron mujeres*";  
  }
  else
  {
    promedioNotaMujeres=acumuladorNotasMujeres/contadorMujeres;
  }
  if (contadorNobinario==0)
  {
    promedioNotaNobinario="*no se ingresaron no binarios*" ; 
  }
  else
  {
    promedioNotaNobinario=acumuladorNotasNobinario/contadorNobinario;
  }
  if (contadorMujeres!=0 || contadorNobinario !=0)
  {
    document.write("A) El alumno hombre con mejor promedio es "+nombreMejorPromedioNoMasc+".<br>");
  }
  if (banderaPrimerLibre==true)
  {
    document.write("B) El alumno libre mas joven es "+nombreMasJovenLibre+".<br>");
  }
  document.write("C) El promedio de notas por sexo es: HOMBRES: "+promedioNotaHombres+" MUJERES: "+promedioNotaMujeres+" NO BINARIOS: "+promedioNotaNobinario+"<br>");
  if (banderaPrimeroNoRemotas==true)
  {
    document.write("D) El alumno que cursa mas materias de forma no remota es "+nombreMasMateriasNoRemotas+", de "+edadMasMateriasNoRemotas+" años.<br>");
  }
}
