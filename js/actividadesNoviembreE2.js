// SA-LPD2 - Conversión de temperaturas 


function numeroEntrada() {
  let input = prompt("Ingrese la temperatura en grados Celsius a convertir:");

  if (isNaN(input) || input === null || input.trim() === "") {
    alert("Por favor, ingrese un número válido.");
    return numeroEntrada();
  }

  return parseFloat(input);
}

function gradosFarenheit(celsius) {
  return (celsius * 1.8) + 32;
}

function imprimirResultadoFarenheit(farenheit) {
  console.log("Grados Fahrenheit: " + farenheit);
}

function gradosKelvin(celsius) {
  return celsius + 273.15;
}

function imprimirResultadoKelvin(kelvin) {
  console.log("Grados Kelvin: " + kelvin);
}

function correrPrograma() {
  const celsius = numeroEntrada();
  const farenheit = gradosFarenheit(celsius);
  const kelvin = gradosKelvin(celsius);

  imprimirResultadoFarenheit(farenheit);
  imprimirResultadoKelvin(kelvin);
}

correrPrograma();
