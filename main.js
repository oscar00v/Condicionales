
//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.



let bello = prompt("¿Eres bellisimo/a?: Si/No");

if(bello == "Si"){

    alert("Ciertamente, eres : Guapo, poderoso, asombroso Muy hermoso, soy precioso, armonioso Un buen socio, misterioso, buena gente Detergente, muy majete, inteligente Nada ojete, irreverente, un exponente Muy perfecto es lo que eres");

}else{

    alert("No te creo");

}
////////////////////////////////////////////////////////////////////////////////

//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

 
const numero = prompt("Dame un numero: ");

if ((numero % 2) == 0){
    alert(+numero+ " es divisible entre 2");
}else{
    alert(+numero+ " no es divisible entre 2")
}


////////////////////////////////////////////////////////////////////////////////

//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.


const numeropar = prompt("Dame un numero: ");

if((numeropar % 2) == 0){

    alert(+numeropar+ " es par");


}else{

    alert(+numeropar+ " es impar");

}

////////////////////////////////////////////////////////////////////////////////

//4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.


const numero1000 = Number(prompt("Dame un numero para el sorteo: "));

if(numero1000 == 1000){

    alert("Ganaste un premio");

}else{

    alert("Lo sentimos, el numero: "+numero1000+ " no es premiado, sigue participando");

}


////////////////////////////////////////////////////////////////////////////////

//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

const numComparacion1 = Number(prompt("Dame el primer numero para comparalo "));

const numComparacion2 = Number(prompt("Dame el segundo numero para comparalo "))


if(numComparacion1> numComparacion2){

    alert(+numComparacion1+" es mayor que " +numComparacion2);

}else{

    alert(+numComparacion2+" es mayor que " +numComparacion1);

}

////////////////////////////////////////////////////////////////////////////////

//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const num3 = parseFloat(prompt("Ingrese el tercer número:"));

let mayor;


if (num1 >= num2 && num1 >= num3) {

  mayor = num1;

} else if (num2 >= num1 && num2 >= num3) {

  mayor = num2;

} else {

  mayor = num3;

}


// Mostrar el resultado

if (num1 == num2 && num1 == num3) {

  alert("Los tres números son iguales");

} else if (num1 == num2 || num1 == num3 || num2 == num3) {

  alert("Hay dos números iguales, y el mayor es: "+mayor);

} else {

  alert("El número mayor es: " +mayor);

}

////////////////////////////////////////////////////////////////////////////////

//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.



let dia = prompt("ingrese un día de la semana: Lunes, Martes, Miercoles, Juevez, Viernes, Sabado, Domingo")

if(dia == "Lunes"){

    alert("Hoy es Lunes, hay que chambiar");

}else if(dia == "Viernes"){

    alert("Hoy es Viernes, toca chelas");

}else if(dia == "Sabado" || dia == "Domingo"
){

    alert("Es fin de semana, a descansar");
    
}else {
    alert("Animo");

}


//////////////////////////////////////////////////////////////////////////////

//8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.


let calificación = Number(prompt("La calificación es :"));

if(calificación<=10 && calificación>=1){
    if(calificación<6){
        alert("Reprobado");
    }else if(calificación >=6 && calificación<=8){
        alert("Regular");
    }else if(calificación == 9){
        alert("Bien");
    }else{
        alert("Exelente");
    }

}else{
    alert("no se puede poner numeros mayores a 10 y menores a 1");
}


//////////////////////////////////////////////////////////////////////////////

/*9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/


let Helado = prompt("Que tipo de helado quieres: Sin topping, oreo , kitkat, brownie");
 const precio = 50;
 const oreo = 10;
 const kitkat = 15;
 const brownie = 20;


if(Helado == "Sin topping"){
    alert("su precio a pagar es : $" + precio + "MXN");

}else if(Helado == "oreo"){
    alert("su precio a pagar es : $"+ (precio+oreo) + "MXN");
}else if(Helado == "kitkat"){
    alert("su precio a pagar es : $" +(precio+kitkat) +"MXN");
}else if(Helado == "brownie"){
    alert("su precio a pagar es : $" +(precio+brownie)+ "MXN");
}else{
    alert("No lo manejamos ");
}

//////////////////////////////////////////////////////////////////////

const opcion = prompt("¿Qué opción has elegido? (Course, Carrera, Master)");


// Asignar el costo mensual según la opción elegida

let costoMensual;

switch (opcion) {

  case "Course":

    costoMensual = 4999;

    break;

  case "Carrera":

    costoMensual = 3999;

    break;

  case "Master":

    costoMensual = 2999;

    break;

  default:

    alert("Opción no válida");

    return;

}

const beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua, Ninguna)");

let descuento;

switch (beca) {

  case "Facebook":

    descuento = 0.20;

    break;

  case "Google":

    descuento = 0.15;

    break;

  case "Jesua":

    descuento = 0.50;

    break;

  default:

    descuento = 0;

}

const precioMensualConDescuento = costoMensual - (costoMensual * descuento);
let duracion;

switch (opcion) {

  case "Course":

    duracion = 2;

    break;

  case "Carrera":

    duracion = 6;

    break;

  case "Master":

    duracion = 12;

    break;

}

const total = precioMensualConDescuento * duracion;


// Mostrar el resultado al usuario

alert("El precio mensual con descuento es de" +precioMensualConDescuento+ "MXN");

alert("El total que gastarías en el curso es de "+total+" MXN");

//////////////////////////////////////////////////////////////////////

/*
11
Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

*/



let vehículo = prompt("Que tipo de vehículo tienes: coche, moto, autobús");
let kilometraje = prompt("Cuantos kilomentros recorriste?");

const litrosConsumidosMenor100 = 5;
const litrosCosumidosMayor100 = 10;



if(vehículo == "coche"){
    let costoKilometro = .20
    if(kilometraje<=100){
        
        let totalPago = ((costoKilometro * kilometraje)+litrosConsumidosMenor100);
        alert("Tu total a pagar es : $"+totalPago);

    }else{
        
        let totalPago = ((costoKilometro * kilometraje)+litrosCosumidosMayor100);
        alert("Tu total a pagar es : $"+totalPago);
    }

}else if(vehículo == "moto"){
    let costoKilometro = .10
    if(kilometraje<=100){
        
        let totalPago = ((costoKilometro * kilometraje)+litrosConsumidosMenor100);
        alert("Tu total a pagar es : $"+totalPago);

    }else{
        
        let totalPago = ((costoKilometro * kilometraje)+litrosCosumidosMayor100);
        alert("Tu total a pagar es : $"+totalPago);
    }

}else{
    let costoKilometro = .5
    if(kilometraje<=100){
        
        let totalPago = ((costoKilometro * kilometraje)+litrosConsumidosMenor100);
        alert("Tu total a pagar es : $"+totalPago);

    }else{
        
        let totalPago = ((costoKilometro * kilometraje)+litrosCosumidosMayor100);
        alert("Tu total a pagar es : $"+totalPago);
    }


}