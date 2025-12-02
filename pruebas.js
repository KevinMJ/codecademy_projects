// // words = ['perra', 'ventana', 'ma', 'casa']
// // word = 'casa'

// // function buscaPalabras(words, word) {
// //   // tu código aquí
// //   const indexOfWord = words.indexOf(word);
// //   const largerWords = words.filter(word => word.length > indexOfWord);
// //   return largerWords;
  
// // }
// // console.log(buscaPalabras(words, word))
// // // Debería mostrar ['perra', 'ventana', 'mesa'] en la consola


// words = [233,123,1234]

// function minAndMaxWord(words) {
//   // tu código aquí
//   let smaller_book_index = 0;
//   let larger_book_index = 0;

//   for (let i = 2; i<words.length; i++){
//     if (words[i] > words[smaller_book_index]){
//       if(words[i] < words[larger_book_index]){
//       }
//       else{
//         larger_book_index = i;
//       }
//     }else{
//       smaller_book_index = i;
//     }
//   }
//   return [smaller_book_index, larger_book_index]
// }

// console.log(minAndMaxWord(words))
// // Debería mostrar [123, 1234] en la consola  

// let obj = { a: true, b: 3, c: false }

// function getKeysOfBooleanValues(obj) {
//     // tu código aquí
//   let keysOfBools=[]
//   for (let key in obj){
//     if (typeof(obj[key]) === typeof(false)){
//       keysOfBools.push(key)
//     }
//   }
//   return keysOfBools;
//   }

// console.log(getKeysOfBooleanValues(obj))
// // Debería mostrar ['a','b','c'] en la consola  

// function searchInOcean(ocean, section, item) {
//     // tu código aquí
//   if (ocean[section][item] === undefined){
//    return false 
//   }
//   return true
// }

// console.log(searchInOcean({ deep: { treasure: "oro" }}, "deep" , "treasure"))
// // Debería mostrar true en la consola 

// function Producto(nombre, precio) {
//   this.nombre = nombre
//   this.precio = precio
// }

// Producto.prototype.aplicarDescuento = function(porcentaje) {
//   this.precio = this.precio - ((porcentaje / 100) * this.precio)
// }

// Producto.prototype.mostrarInfo = function() {
//   return `El precio del ${this.nombre} es $${this.precio}`
// }

// let pera = new Producto('Pera', 500)
// let manzana = new Producto('Manzana', 1000)

// console.log(pera.mostrarInfo())       // El precio del Pera es $500
// pera.aplicarDescuento(10)
// console.log(pera.mostrarInfo())       // El precio del Pera es $450

// console.log(manzana.mostrarInfo())    // El precio del Manzana es $1000
// manzana.aplicarDescuento(20)
// console.log(manzana.mostrarInfo())    // El precio del Manzana es $800

// class Producto {
//     constructor(nombre, precio, categoria) {
//       this.nombre = nombre
//       this._precio = precio
//       this.categoria = categoria
//     }

//     get precioConIVA() {
//       return this._precio * (1.21)
//     }
//     set precio(value) {
//       if (value > 0){
//         this._precio = value
//       }
//     }
//     aplicarDescuento(porcentaje) {
//       this._precio -= (porcentaje/100) * this._precio
//     }
//     static compararPrecios(producto1, producto2) {
//       return producto1._precio < producto2._precio? producto1.nombre : producto2.nombre
//     }
//   }

//   let banana = new Producto('Banana', 200, 'Fruta')
//   let laptop = new Producto('Laptop', 1500, 'Electrónica')

//   console.log(banana.precioConIVA)   // 242
//   console.log(laptop.precioConIVA)   // 1815

//   banana.aplicarDescuento(10)
//   console.log(banana.precio)         // 180

//   console.log(Producto.compararPrecios(banana, laptop)) // 'Banana' 

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

