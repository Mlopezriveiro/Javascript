/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
	*/
/*
function eurosAyenes(eur){
	return (eur * 120 + "    " + "yenes");
}
function yenesAeuros(yenes){
	return (yenes / 120 + "    " + "euros");
}
function mon(moneda){
	if (moneda == "euros"){
		document.write(ee);
	} else {
		if (moneda == "yenes"){
			document.write(yy);
		}
	}
}
*/
function eurosAyenes(eur){
	return (precio*122.49);
}

function yenesAeuros(yenes){
	return(precio/122.49);
}
var rr;
rr = true;
while (rr == true){
	var resposta;
	resposta = prompt("Que has comprado   ");
	var precio;
	precio = prompt("Cuanto vale   ");

	var valorF;
	valorF = parseFloat(precio);
	var moneda;
	moneda = prompt("Que moneda usas   ");


	if (moneda == "euros") {
		var ee = eurosAyenes(valorF);
		document.write( ee + "  " + "yenes");
	}else{
		var yy = yenesAeuros(valorF);
		document.write( yy + "  " + "euros");
	}
	rr = confirm("repetimos?");

}
alert("gracias")