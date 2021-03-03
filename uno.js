/*
MÉNDEZ JULIO - DIVISION G.
Enunciado:
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/
function mostrar()
{
	let nombreProductoIngresado;
	let precioProductoIngresado;
	let unidadesProductoIngrsadas;
	let tipoInflamableIngresado;
	let marcaProductoIngresado;
	let contadorAlcohol=0;
	let contadorIac=0;
	let contadorQuat=0;
	let acumuladorAlcohol=0;
	let acumuladorIac=0;
	let acumuladorQuat=0;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;
	let tipoInflamableConMasCantidad;
	let acumuladorCantidadInifugo=0;
	let acumuladorCantidadCombustible=0;
	let acumuladorCantidadExplosivo=0;
	let acumuladorIacMenoresADoscientos=0;
	let precioMasCaroDeLosProductos;
	let marcaMasCaroDeLosProductos;
	let tipoMasCaroDeLosProductos;
	let banderaPrimerProducto=false; //para hallar el mas caro.

	for (let i = 0; i < 5; i++)
	{
		do
		{
			nombreProductoIngresado=prompt("Ingrese el nombre del producto:[ALCOHOL][IAC][QUAT]");
		}
		while(nombreProductoIngresado!="ALCOHOL" && nombreProductoIngresado!="IAC" && nombreProductoIngresado!="QUAT");
		do
		{
			precioProductoIngresado=parseInt(prompt("Ingrese el precio del producto:(entre 100 y 300)"));
		}
		while(isNaN(precioProductoIngresado) || precioProductoIngresado<100 || precioProductoIngresado>300);
		do
		{
			unidadesProductoIngrsadas=parseInt(prompt("Ingrese la cantidad de unidades adquiridas:(entre 0 y 1000)"));
		}
		while(isNaN(unidadesProductoIngrsadas)==true || unidadesProductoIngrsadas<0 || unidadesProductoIngrsadas>1000);
		do
		{
			tipoInflamableIngresado=prompt("Ingrese el tipo de inflamable del producto:[inifugo][combustible][explosivo]");
		}
		while(tipoInflamableIngresado!="inifugo" && tipoInflamableIngresado!="combustible" && tipoInflamableIngresado!="explosivo");
		do
		{
			marcaProductoIngresado=prompt("Ingrese la marca del producto:");
		}
		while(isNaN(marcaProductoIngresado)==false || marcaProductoIngresado=="");
		switch (nombreProductoIngresado)
		{
			case "ALCOHOL":
				acumuladorAlcohol=acumuladorAlcohol+unidadesProductoIngrsadas;
				contadorAlcohol++;
				break;
			case "IAC":
				acumuladorIac=acumuladorIac+unidadesProductoIngrsadas;
				contadorIac++;
				break;
			case "QUAT":
				acumuladorQuat=acumuladorQuat+unidadesProductoIngrsadas;
				contadorQuat++;
				break;
		}
		switch (tipoInflamableIngresado)
		{
			case "inifugo":
				acumuladorCantidadInifugo=acumuladorCantidadInifugo+unidadesProductoIngrsadas;
				break;
			case "combustible":
				acumuladorCantidadCombustible=acumuladorCantidadCombustible+unidadesProductoIngrsadas;
				break;
			case "explosivo":
				acumuladorCantidadCombustible=acumuladorCantidadCombustible+unidadesProductoIngrsadas;
				break;
		}
		if (nombreProductoIngresado=="IAC" && precioProductoIngresado<=200)
		{
			acumuladorIacMenoresADoscientos=acumuladorIacMenoresADoscientos+unidadesProductoIngrsadas;
		}
		if (banderaPrimerProducto==false)
		{
			precioMasCaroDeLosProductos=precioProductoIngresado;
			marcaMasCaroDeLosProductos=marcaProductoIngresado;
			tipoMasCaroDeLosProductos=tipoInflamableIngresado;
			banderaPrimerProducto=true;	
		}
		else if (precioMasCaroDeLosProductos<precioProductoIngresado)
		{
			precioMasCaroDeLosProductos=precioProductoIngresado;
			marcaMasCaroDeLosProductos=marcaProductoIngresado;
			tipoMasCaroDeLosProductos=tipoInflamableIngresado;
		}
	}
	if(contadorAlcohol==0)
	{
		promedioAlcohol="no se compró alcohol";
	}
	else
	{
		promedioAlcohol=acumuladorAlcohol/contadorAlcohol;
	}
	if (contadorIac==0)
	{
		promedioIac="no se compró IAC";	
	}
	else
	{
		promedioIac=acumuladorIac/contadorIac;
	}
	if (contadorQuat==0)
	{
		promedioQuat="no se compró QUAT";	
	}
	else
	{
		promedioQuat=acumuladorQuat/contadorQuat;
	}
	if (acumuladorCantidadInifugo>=acumuladorCantidadExplosivo && acumuladorCantidadInifugo>= acumuladorCantidadCombustible)
	{
		tipoInflamableConMasCantidad="Inifugo";	
	}
	else
	{
		if (acumuladorCantidadExplosivo>=acumuladorCantidadInifugo && acumuladorCantidadExplosivo >= acumuladorCantidadCombustible)
		{
			tipoInflamableConMasCantidad="Explosivo";	
		}
		else
		{
			tipoInflamableConMasCantidad="Combustible";
		}
	}	
	document.write("A) El promedio de alcohol adquirido por compra es de: "+promedioAlcohol+". El de IAC es de: "+promedioIac+". Y el de QUAT es de: "+promedioQuat+".<br>");
	document.write("B) El tipo de inflamable con mas cantidad que se compra es: "+tipoInflamableConMasCantidad+".<br>");;
	if (acumuladorIacMenoresADoscientos==0)
	{
		document.write("C) No se compró IAC por menos de $200.<br>");;	
	}
	else
	{
		document.write("C)Se compraron "+acumuladorIacMenoresADoscientos+" unidades de IAC por menos de $200.<br>");;	
	}
	document.write("D) El mas caro de los productos es: "+marcaMasCaroDeLosProductos+". De tipo: "+tipoMasCaroDeLosProductos+".<br>");;	
}
