let num: number;
num = prompt("ingrese num entero");

while (num <= 0) {
  num = prompt("ingrese num entero");
}
if (num % 2 === 0) {
  console.log("el numero " + num + "es par");
} else {
  console.log("el numero " + num + " es impar");
}
