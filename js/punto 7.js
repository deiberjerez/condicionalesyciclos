let subtotal = 0;

for (let i = 1; i <= 2; i++) {
  let nombre = prompt("ingrese el nombre del producto " + i + ":")  
  let precio = Number(prompt("ingrese el precio del producto " + i + ":"))
  subtotal = subtotal + precio;

  console.log(nombre + ": $" + precio);
}

let ivaporcentaje = 0.19;
let iva = subtotal * ivaporcentaje;
let total = subtotal + iva;

console.log("subtotal: $" + subtotal);
console.log("IVA (19%): $" + iva);
console.log("total a pagar: $" + total);
