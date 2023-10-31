// SA-LPD4 - Fibonacci

function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function getFibonacciSeries(num) {
  const fibonacciSeries = [0, 1];
  for (let i = 2; i < num; i++) {
    fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
  }
  return fibonacciSeries;
}

function imprimirFibonacciSeries() {
  let userInput;
  let isValid = false;

  while (!isValid) {
    userInput = prompt('Ingresa un número para generar la serie de Fibonacci:');

 
    isValid = isNumeric(userInput);

    if (!isValid) {
      alert('Por favor, ingresa un número válido.');
    }
  }

  const num = parseInt(userInput, 10);
  const fibonacciSeries = getFibonacciSeries(num);


  alert('Serie de Fibonacci hasta el ' + num + ' número es:\n' + fibonacciSeries.join(', '));
}

imprimirFibonacciSeries();



  
