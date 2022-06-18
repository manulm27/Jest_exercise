console.log("hello word");

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b;
};

// solo un registro en consola para nosotros.
console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 134.91, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.068, // british pound
};


let fromDollarToYen = (num, obj)=>{
	let yen = oneEuroIs["JPY"];
	return num * yen;
};

let fromEuroToDollar = (num) =>{
	let dollar = oneEuroIs["USD"];
	return 'Dollar: '+ num * dollar;
};

let fromYenToGbp = (num) =>{
	let gbp = oneEuroIs["GBP"];
	if(num * gbp){
		let result = num * gbp
		return result.toString()
	};
};

console.log(fromDollarToYen(3));
console.log(fromEuroToDollar(3));
console.log(fromYenToGbp(10))

// exporta la función para usarla en otros archivos
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToGbp, oneEuroIs };