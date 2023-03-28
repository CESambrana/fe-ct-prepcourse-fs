/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = [];
   for (var key in objeto){
      var arreglo2 = [key, objeto[key]];
      arreglo.push(arreglo2);
   }
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const obj ={};
   for (var letter of string){
      if (obj.hasOwnProperty(letter)) obj[letter] += 1
      else {
         obj[letter] = 1
      }
   } return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayus ="";
   let minus ="";
   //const minusculas = "abcdefghijklmnñopqrstuvwxyz"
   //for (let palabra of string){
    //  if (minusculas.includes(palabra)) minus += palabra;
     // else mayus += palabra;
   //}
   
   for (var letra of string){
      if (letra === letra.toUpperCase()) mayus += letra;
      else minus += letra; 
   }

   return mayus + minus;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ")
   var alreves = palabras.map((elem)=>{
      var res = "";
      for (var i = elem.length - 1;i >=0; i--){
         res += elem[i];
      } return res;
   });
   return alreves.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
 var reversa = numero.toString().split("").reverse().join("");
   if (numero == reversa){
      return "Es capicua"
   } else {
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array = [];
   for (var i = 0; i < string.length; i++){
      if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c"){
         array.push(string[i])
      }
   } var todo_junto = array.join("");
   return todo_junto;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código: 
   var arr = arrayOfStrings;
   for (var i =0; i <arr.length;i++){
      var comparador = arr[i];
      j = i-1;
      while(j>=0 && comparador.length < arr[j].length){
         arr[j+1] = arr[j];
         j--
      }
      arr[j+1] = comparador;
   } return arr;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var num_comunes = [];
   var set = new Set(array1)
   for (var i =0; i<array2.length; i++){
      if (set.has(array2[i])){
         num_comunes.push(array2[i])
      }
   } return num_comunes;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
