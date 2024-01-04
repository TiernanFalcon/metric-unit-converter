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
const inputEl = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")


    
const temperatureEl = document.getElementById("temperature")    
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")


// add event listener
// write a function that converts the user input value   
    // probably a better way to do this with parameters but I'm not sure how to.. yet
convertBtn.addEventListener("click", function(){
    let userValue = inputEl.value
    let celToFahr = (userValue * 9/5) + 32
    let fahrToCel = (userValue - 32) * (5/9)
    // using Number() makes the result cut trailing zeros if it's a whole number
        //except now I'm removing it because plural is OK with decimals but not a singular unit
    temperatureEl.textContent = `${userValue} °C = ${Number((celToFahr).toFixed(1))} °F 
        | ${userValue} °F = ${Number((fahrToCel).toFixed(1))} °C`
        
    lengthEl.textContent = `${userValue} meters = ${(userValue * meterToFeet).toFixed(2)} feet 
        | ${userValue} feet = ${(userValue / meterToFeet).toFixed(2)} meters`
        
    volumeEl.textContent = `${userValue} liters = ${(userValue * literToGal).toFixed(2)} gallons 
        | ${userValue} gallons = ${(userValue / literToGal).toFixed(2)} liters`
        
    massEl.textContent = `${userValue} kilograms = ${(userValue * kiloToLb).toFixed(2)} pounds 
        | ${userValue} pounds = ${(userValue / kiloToLb).toFixed(2)} kilograms`
})
  
  
// additions

inputEl.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        convertBtn.click()
    }
}) 
