// SA-LPD2 - Conversión de temperaturas 


  function numeroEntrada() {
    let input = prompt("Ingrese la temperatura en grados celcius a convertir:");
  

  if (isNaN(input) || input === null || input.trim() === "") {
    alert("Por favor, ingrese un número válido.");
    return numeroEntrada();  
  }

  return parseFloat(input);
}

function gradosFarenheit(celsius) {
  return (celsius * 1.8) + 32;
}
function imprimirResultado(gradosFarenheit) {
  console.log("Grados Farenheit: " + gradosFarenheit)
}

function gradosKelvin(celsius) {
  return (celsius + 273.15);
}
function imprimirResultado(gradosKelvin) {
  console.log("Grados kelvin: " + gradosKelvin)
}




function correrPrograma() {
    const celsius = numeroEntrada();
    const farenheit = gradosFarenheit (celsius);
    const kelvin = gradosKelvin (celsius) ;

    imprimirResultado(farenheit);
    imprimirResultado(kelvin);

  }
  
  correrPrograma();
