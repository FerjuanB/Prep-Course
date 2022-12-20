// No cambies los nombres de las funciones.

const { suma } = require("../../02-JS-I/homework/homework");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length - 1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return (array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 array = array.map(elemento => elemento = elemento + 1)
 return array
};
  
 


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
 
 array.push(elemento)
 return array;
}
  


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  if (palabras.length > 1){
    for ( var i = 0; i < palabras.length; i++){ 
    return palabras[i] + " " + palabras[i + 1] + " " + palabras[i + 2]
  }} else {
    return palabras[0]
  }

};



function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0;  i < array.length; i++){
  if (array[i] === elemento){
return true;
}
}
return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0
  for (var i = 0; i < numeros.length; i++){
    suma += numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0
  for ( var i = 0; i < resultadosTest.length; i++){{
    (promedio =  promedio + resultadosTest[i]) 
     
  }} return promedio/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = 0
  for( var i = 0; i < numeros.length; i++){
    if (numeros [i] > numeros [i + 1] && numeros[i] > numeros [i - 1]){
      return numeros[i];
  
  }
}
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplica = 1
  if (arguments.length < 1){
    return 0;
  } else if (arguments.length === 1){
return arguments [0];    
  } else {
    for (var i = 0; i < arguments.length; i++){
      multiplica *= arguments[i];
    }
} return multiplica

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var mayores = 0
for (var i = 0; i< arreglo.length; i++){
  if (arreglo[i] > 18){
    mayores+= 1;
  }
}return mayores
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  } else {
    return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var nstring = n.toString();
  if (nstring [0] == 9) {
    return true;
  } else {
    return false
}
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i = 0; i< arreglo.length; i++){
    if (arreglo[i] === arreglo [i + 2] && arreglo[i + 1] === arreglo [i + 3]){
      return true;
    } else {
      return false 
    }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var Meses = []
  for ( var i = 0; i < array.length; i++){
    if (array[i] === "Enero" || array[i] === "Marzo" || array [i] === "Noviembre"){
       Meses.push(array[i]);
    } 
    }
  if (Meses.length === 3){
    return Meses;
  } else {
    return "No se encontraron los meses pedidos"
  }

}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayores = []
  for (var i = 0; i < array.length; i++){
    if (array [i] > 100){
      mayores.push(array[i])
    }
  } return mayores
}  


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arraynuevo = []
  var sumadanueva = numero
  for (var i = 0; i < 10 ; i++){
    sumadanueva += 2;
    if (sumadanueva === i){
      break;
    }else{
      arraynuevo.push(sumadanueva);
    } 
    } 
    if (arraynuevo.length < 10){
      return "Se interrumpió la ejecución";
    }else{
      return arraynuevo;
    }
    } 
  

 



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var suma = numero
  var sumanueva = []
  for( var i = 0; i < 10; i++){
    if(i === 5){
      continue;
    } else{
      suma += 2;
      sumanueva.push(suma)
    }
  }
return sumanueva;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
