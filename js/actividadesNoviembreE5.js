// SA-LPD5 - Número secreto

function adivinarNumero() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
  const intentos = [];

  while (true) {
    const userInput = prompt('Intente adivinar el número secreto (entre 1 y 100):');

    // si el usuario hizo clic en Cancelar
    if (userInput === null) {
      console.log('Has cancelado el juego, ¡adios!.');
      return;
    }

    const numeroUsuario = parseInt(userInput, 10);

    // Verificar si el dato de entrada es un número
    if (isNaN(numeroUsuario)) {
      alert('Por favor, ingrese un número válido.');
      continue;
    }

    
    intentos.push(numeroUsuario);
   


    if (numeroUsuario < numeroSecreto) {
      console.log('Ups, el número secreto es mayor. Intenta de nuevo.');
    } else if (numeroUsuario > numeroSecreto) {
      console.log('Ups, el número secreto es menor. Intenta de nuevo.');
    } else {
      console.log('Felicidades, adivinaste el número secreto.');
      console.log('Lista de números introducidos:', intentos);
      return;
    }
  }
}

adivinarNumero();



  
