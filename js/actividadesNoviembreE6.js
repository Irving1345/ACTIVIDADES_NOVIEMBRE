// SA-LPD6 - Texto invertido

function introducirPalabra (palabra){
palabra = palabra.replace(/[.,\/#!$%\^&\\\*;:{}=\-_`~()\s]/g, '');
palabraInversa = palabra.split("").reverse("").join("");
console.log(palabraInversa)
}