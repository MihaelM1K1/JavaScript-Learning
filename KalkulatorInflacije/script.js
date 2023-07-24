function inflationCalculator(){
    let inflationRate = parseFloat(document.querySelector('#inflationRate').value)
    let money = parseFloat(document.querySelector(`#money`).value)
    let years = parseFloat(document.querySelector(`#years`).value)
    let result = money +(money * (inflationRate/100))
    let displayResult = document.querySelector(`#result`)
    
    for (let i = 1; i < years; i++){
        result += result * (inflationRate/100);
    }

    console.log(`
    INFLATION RATE: ${inflationRate}%
    MONEY: ${money}
    YEARS: ${years}
    RESULT: ${result}
    `)
    displayResult.innerText = `
    ${money}€ today is worth the same as ${result.toFixed(2)}€ in ${years} years.`
}