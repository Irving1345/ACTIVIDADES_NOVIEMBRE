// SA-LPD3 - Factorial 


  function numeroEntrada() {
    let input = prompt("Ingrese el número a calcular:");
  

  if (isNaN(input) || input === null || input.trim() === "") {
    alert("Por favor, ingrese un número válido.");
    return numeroEntrada();  
  }

  return parseFloat(input);
}

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }

function imprimirResultado(calcularFactorial) {
  console.log(`El factorial del número es: ${calcularFactorial}`);
}

function correrPrograma() {
    const numero = numeroEntrada();
    const factorial = calcularFactorial(numero);
    imprimirResultado(factorial);
  }
  
  correrPrograma();
