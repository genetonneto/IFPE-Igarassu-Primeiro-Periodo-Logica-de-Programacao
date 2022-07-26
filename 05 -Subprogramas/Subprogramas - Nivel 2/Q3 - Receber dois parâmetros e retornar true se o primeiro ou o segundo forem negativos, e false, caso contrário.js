// Receber dois parâmetros e retornar true se o primeiro ou o segundo forem negativos, e false, caso contrário;

function parametros(p1,p2){
	if ((p1 < 0) || (p2 < 0)){
		return true
	} else {
		return false
	}
}

console.log(parametros(4,5))

/*
p1 < 0 || p2 < 0 = true
p1 < 0 || p2 > 0 = true
p1 > 0 || p2 < 0 = true
p1 > 0 || p2 > 0 = false
*/
