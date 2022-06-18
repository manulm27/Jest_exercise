// importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToGbp, oneEuroIs } = require('./index.js');


// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('change dollar to yen', () =>{

    expect(oneEuroIs).toHaveProperty('JPY')
    expect(oneEuroIs).toHaveProperty('USD')
    expect(oneEuroIs).toHaveProperty('GBP')

    expect(isNaN(oneEuroIs['USD'])).toBe(false)

    let numbers = fromDollarToYen(25);
    expect(typeof(numbers) == "number").not.toBe(false);

    let result = fromEuroToDollar(98);
    expect(result =! 0).toBe(true);

    let multi = fromYenToGbp(10);
    expect(multi).not.toHaveLength(1);

    let inputObj = fromEuroToDollar().dollar
    expect(typeof(numbers) == "number").toBe(true)

})


