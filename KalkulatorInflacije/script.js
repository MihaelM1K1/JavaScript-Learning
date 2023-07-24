function inflationCalculator(){
    let inflationRate = parseFloat(document.querySelector('#inflationRate').value)
    let money = parseFloat(document.querySelector(`#money`).value)
    let years = parseFloat(document.querySelector(`#years`).value)
    let rezultat = money +(money * (inflationRate/100))
    let rezultatPrikaz = document.querySelector(`#rezultat`)
    
    for (let i = 1; i < years; i++){
        rezultat += rezultat * (inflationRate/100);
    }

    console.log(`
    STOPA INFLACIJE: ${inflationRate}%
    PARE: ${money}
    GODINE: ${years}
    REZULTAT: ${rezultat}
    `)
    rezultatPrikaz.innerText = `
    ${money}€ vrijedi kao ${rezultat.toFixed(2)}€ za  ${years} godina.`
}