const LIMITE = 50
let precios = [120, 45, 80, 15, 200, 30];
let i = 0

while(i < precios.length){
	if(precios[i] >= LIMITE){
		console.log("Ya no te sirve el precio, es muy caro, su valor es: " + precios[i])
		}

	else {console.log("Es una buena oferta, su valor es: " + precios[i])
    }
	

    i++;
}
