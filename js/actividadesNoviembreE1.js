// SA-LPD1 - Práctica de comparación de números 

const numero1 = parseInt(prompt('Ingrese el primer número:'));
const numero2 = parseInt(prompt('Ingrese el segundo número:'));
const numero3 = parseInt(prompt('Ingrese el tercer número:'));



function ordenarNumeros(numero1, numero2, numero3) {

  const mayor = Math.max(numero1, numero2, numero3);
  const menor = Math.min(numero1, numero2, numero3);
  const centro = numero1 + numero2 + numero3 - mayor - menor;

  // Verificar si los números son iguales
  

  if (a === b && b === c) {
    console.log('Los números son iguales.');
  } else {
    console.log('Los números no son iguales.');


    // Mostrar los números ordenados y si son iguales
  console.log('Números ordenados de mayor a menor:', mayor, centro, menor);
  console.log('Números ordenados de menor a mayor:', menor, centro, mayor);

    
  }
}

ordenarNumeros();
