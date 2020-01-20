/*
	Tarefa 5
	Nome do ficheiro: script.js
		Usado: alert(), if y else 

		Si hace calor pues me baño en la piscina
		if .......... else .....................

*/

function medalla(posicion){

if(posicion == 1) {
	document.write("Medalla de ouro");
} else {
	if(posicion == 2){
		document.write("Medalla de plata")
	}else{
		if (posicion == 3) {
			document.write("Medalla de bronce")
		}else{
			document.write("Medalla de carton ");
		}
	}
}


}

var puesto = prompt("En que posicion quedaste");
numeropuesto = parseFloat(puesto);
 medalla(numeropuesto);


