/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// define conversion ratios
const meterToFeet = 3.281
const literToGal = 0.264
const kiloToLb = 2.204


// define each input/output field for js
let inputEl = document.getElementById("input")
let convertBtn = document.getElementById("convert-btn")

// let temperatureEl = document.getElementById("temperature") -- come back to this after the original works
    // let celsiusToF = (userValue * 1.8) + 32
    // let FahrenToCel = (userValue - 32) * (5/9)
    // temperatureEl.textContent = `${userValue} Celsius = ${celsiusToF} | ${userValue} Fahrenheit = ${FahrenToCel} Celsius `
    
let temperatureEl = document.getElementById("temperature")    
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")


// add event listener
// write a function that converts the user input value   
convertBtn.addEventListener("click", function(){
    let userValue = inputEl.value
    let celToFahr = (userValue * 9/5) + 32
    let fahrToCel = (userValue - 32) * (5/9)
    // using Number() makes the result cut trailing zeros if it's a whole number
        //except now I'm removing it because plural is OK with decimals but not a singular unit
    temperatureEl.textContent = `${userValue} Celsius = ${(celToFahr).toFixed(3)} Fahrenheit 
        | ${userValue} Fahrenheit = ${(fahrToCel).toFixed(3)} Celsius`
        
    lengthEl.textContent = `${userValue} meters = ${(userValue * meterToFeet).toFixed(3)} feet 
        | ${userValue} feet = ${(userValue / meterToFeet).toFixed(3)} meters`
        
    volumeEl.textContent = `${userValue} liters = ${(userValue * literToGal).toFixed(3)} gallons 
        | ${userValue} gallons = ${(userValue / literToGal).toFixed(3)} liters`
        
    massEl.textContent = `${userValue} kilograms = ${(userValue * kiloToLb).toFixed(3)} pounds 
        | ${userValue} pounds = ${(userValue / kiloToLb).toFixed(3)} kilograms`
})
  
  
 
