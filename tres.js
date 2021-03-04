/*
MÉNDEZ JULIO - DIVISION G.
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas,
 de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%,
 que solo mostramos si corresponde.
*/
function mostrar()
{
	let nombreIngresado;
	let estadoCivilIngresado;
	let edadIngresada;
	let temperaturaIngresada;
	let sexoIngresado;
	let precioPorPasajero=600;
	let contadorViudosMasDe=0;
	let banderaPrimeraSoltera=false; //para hallar a la mas joven.
	let nombreSolteraMasJoven;
	let edadSolteraMasJoven;
	let costoDelViaje;
	let ContadorDeAncianos=0;
	let contadorTotal=0;
	let botonContinuar=true;

	do
	{
		do
		{
		  nombreIngresado=prompt("Ingrese el nombre del pasajero:");
		}
		while(isNaN(nombreIngresado)==false || nombreIngresado=="");
		do
		{
			estadoCivilIngresado=prompt("Ingrese el estado civil:[casado][soltero][viudo]");
		}
		while(estadoCivilIngresado!="casado" && estadoCivilIngresado!="soltero" && estadoCivilIngresado!="viudo");
		do
		{
			edadIngresada=parseInt(prompt("Ingrese la edad del pasajero:"))
		}
		while(isNaN(edadIngresada)==true || edadIngresada<17);
		do
		{
			temperaturaIngresada=parseInt(prompt("Ingrese la temperatura corporal"))
		}
		while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<35 || temperaturaIngresada>44);
		do
		{
			sexoIngresado=prompt("Ingrese el sexo del pasajero:[hombre][mujer]")
		}
		while(sexoIngresado!="hombre" && sexoIngresado!="mujer");
		if (edadIngresada> 60)
		{
			ContadorDeAncianos++;
			if (estadoCivilIngresado=="viudo")
			{
				contadorViudosMasDe++;	
			}	
		}
		if (sexoIngresado=="mujer" && estadoCivilIngresado=="soltero")
		{
			if (banderaPrimeraSoltera==false)
			{
				nombreSolteraMasJoven=nombreIngresado;
				edadSolteraMasJoven=edadIngresada;
				banderaPrimeraSoltera=true;
			}	
		}
		contadorTotal++;
		botonContinuar=confirm("¿Desea agregar otro pasajero?");
	}
	while(botonContinuar==true);
	costoDelViaje=contadorTotal*precioPorPasajero;
	if (contadorViudosMasDe!=0)
	{
	  document.write("A) Hay "+contadorViudosMasDe+" viudos de mas de 60.<br>");
	}
	if (banderaPrimeraSoltera==true)
	{
		document.write("B) La mujer soltera mas joven es "+nombreSolteraMasJoven+" con "+edadSolteraMasJoven+" años.<br>");
	}
	document.write("C)El costo del viaje total es de $"+costoDelViaje+".<br>");
	if (ContadorDeAncianos/contadorTotal*100>50)
	{
		costoDelViaje=costoDelViaje*0.75;
		document.write("D)Debido a que mas del 50% de sus pasajeros tiene mas de 60 años, le ofrecemos un descuento del 25%, dando un total de $"+costoDelViaje+".<br>");
	}
}
