/*
Ejercicio 1
Suponga que un individuo desea invertir su capital en un banco y desea saber cuánto dinero ganará después de un mes si el
banco paga a razón de 2% mensual.

*/
function ejercicio1OnClick(){

    const input = document.getElementById("input0Ejercicio1");
    const container = document.querySelector(".containerEjercicio1");

    let inputValue = parseFloat(input.value);

    if (isNaN(inputValue) || inputValue < 0) {
        alert("Ejercicio 1. Por favor, ingresa un valor numérico válido.");
        return;
    }

    let existNewP = document.getElementById("parrafo00");

    if(!existNewP){
        let newP = document.createElement('p');
        newP.textContent = "El individo ganara: " + ejercicio1(inputValue);
        newP.id = "parrafo00";
        container.appendChild(newP);
    }
    else{
        existNewP.textContent = "El individo ganara: " + ejercicio1(inputValue);
    }

}

function ejercicio1(capitaInicial){
    return capitaInicial * Math.pow((1 + 0.02), 1);
}

console.log(ejercicio1(1000))

/*
Ejercicio 2
Un vendedor recibe un sueldo base más un 10% extra por comisión de sus ventas, el vendedor desea saber cuánto dinero obtendrá por
concepto de comisiones por las tres ventas que realiza en el mes y el total que recibirá en el mes tomando en cuenta su sueldo base
y comisiones.
*/

function ejercicio2OnClick(){

    const container = document.querySelector(".containerEjercicio02");

    const input00 = document.getElementById("input0Ejercicio2");
    const input01 = document.getElementById("input1Ejercicio2");

    let input00Values = parseFloat(input00.value);
    let input01Values = parseFloat(input01.value);

    if(isNaN(input00Values) || isNaN(input01Values) || input00Values < 0 || input01Values < 0){
        alert("Ejercicio 2. Campos Invalidos");
        return;
    }
    else{

        let [sueltoT, comisiones] = ejercicio2(input00Values, input01Values);
        
        let existNewP = document.getElementById("parrafo00");

        if(!existNewP){
            let newP = document.createElement('p');
            newP.textContent = "Suelto Total: " + sueltoT + ". Comisiones: " + comisiones;
            newP.id = "parrafo00";

            container.appendChild(newP);
        }
        else{
            existNewP.textContent = "Suelto con comisiones: " + sueltoT + ". Comisiones: " + comisiones;
        }

    }

}

function ejercicio2(sueldoBase, numeroDeComisiones){

    let total;
    let comision;

    //Dinero total mas
    if(sueldoBase >= 0 || numeroDeComisiones >= 0){
        total = sueldoBase + numeroDeComisiones * (sueldoBase * 0.1);
        //Dinero por comisiones
        comision = numeroDeComisiones * (sueldoBase * 0.1);
    }
    else{
        total = 0;
        comision = 0;
    }


    return [total, comision];
}

console.log(ejercicio2(1000,3));


/*
Ejercicio 3
Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra.
*/

function ejercicio3OnClick(){

    const input00 = document.getElementById("input0Ejercicio3");
    const container = document.querySelector(".containerEjercicio03");
    
    let inputValue = parseFloat(input00.value);
    let existNewP = document.getElementById("parrafo00");

    if(isNaN(inputValue) || inputValue < 0){
        alert("Ejercicio 3. Valor invalido")
        return;
    }
    else{

        if(!existNewP){
            let newP = document.createElement("p");
            newP.textContent = "El precio con el descuento es: $" + (inputValue - ejercicio3(inputValue));
            newP.id = "parrafo00";

            container.append(newP);
        }
        else{
            existNewP.textContent = "El precio con el descuento es: $" + (inputValue - ejercicio3(inputValue));
        }

    }


}

function ejercicio3(precio1){

    let precio;

    if(precio1 < 0){
        precio = 0;
    }
    else{
        precio = precio1 * 0.15;
    }

    return precio;
}

console.log(ejercicio3(100));


/*
Ejercicio 4
Un alumno desea saber cuál será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes
porcentajes:
55% del promedio de sus tres calificaciones parciales.
30% de la calificación del examen final.
15% de la calificación de un trabajo final.
*/

function ejercicio4OnClick(){

    const input00 = document.getElementById("input0Ejercicio4");
    const input01 = document.getElementById("input1Ejercicio4");
    const input02 = document.getElementById("input2Ejercicio4");
    const input03 = document.getElementById("input3Ejercicio4");
    const input04 = document.getElementById("input4Ejercicio4");

    let input00Value = parseFloat(input00.value);
    let input01Value = parseFloat(input01.value);
    let input02Value = parseFloat(input02.value);
    let input03Value = parseFloat(input03.value);
    let input04Value = parseFloat(input04.value); 
    
    const container = document.querySelector(".containerEjercicio04");

    let existNewP = document.getElementById("parrafo00");

    if(isNaN(input01Value) ||isNaN(input02Value) ||isNaN(input03Value) || isNaN(input00Value) || isNaN(input04Value)){
        alert("Ejercicio 4. Valores Nulos");
        return;
    }
    else{

        if(!existNewP){
            let newP = document.createElement("p");
            newP.textContent = "El promedio es: "+ ejercicio4(input00Value,input01Value,input02Value, input03Value,input04Value);
            newP.id = "parrafo00";

            container.append(newP);
        }
        else{
            existNewP.textContent = "El promedio es: "+ ejercicio4(input00Value,input01Value,input02Value, input03Value,input04Value);
        }
        

    }
    

}

function ejercicio4(calificacion1, calificacion2, calificacion3, examenFinal, trabajoFinal){

    let promedioCalificioesParciales = (calificacion1 + calificacion2 + calificacion3) / 3;
    
    let promediofinal = ((promedioCalificioesParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15));

    return promediofinal;
}

console.log(ejercicio4(7,10,10,8,3));


/*
Ejercicio 5
Realiza un algoritmo que calcule la edad de una persona.
*/

/*
Ejercicio 6
Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo cada palabra a su
versión numérica (del 0 al 9). Si la palabra no es un número se traduce a -1.
*/

function ejercicio6OnClick(){
    const input00 = document.getElementById("input0Ejercicio6");
    const container = document.querySelector(".containerEjercicio06");
    
    let inputValue = input00.value.split(' '); // Dividir la cadena en palabras
    let existNewP = document.getElementById("parrafo00");

    // Validación: Si el campo está vacío, muestra un mensaje de error
    if(inputValue.length === 0 || input00.value.trim() === ""){
        alert("Ejercicio 6. Valor inválido");
        return;
    } else {
        if(!existNewP){
            let newP = document.createElement("p");
            newP.textContent = "La traducción del texto es " + ejercicio6(inputValue);
            newP.id = "parrafo00";

            container.append(newP);
        } else {
            existNewP.textContent = "La traducción del texto es " + ejercicio6(inputValue);
        }
    }
}

function ejercicio6(arr) {
    let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let strletra = "";

    for(let x of arr){ // Itera sobre las palabras
        for(let y of x){ // Itera sobre cada letra de la palabra
            y = y.toLowerCase();
            let index = letras.indexOf(y);

            if (index !== -1) { // Asegúrate de que es una letra válida
                strletra += index + 1; // Suma 1 para empezar en 1 (y no en 0)
            } else {
                strletra += "-1"; // Si no es letra, agrega un espacio
            }
        }
        strletra += " "; // Agrega un espacio entre palabras
    }
    return strletra.trim(); // Elimina espacios en blanco al inicio y final
}

/*
Ejercicio 7
Determinar la cantidad de dinero que recibirá un trabajador por concepto de las horas extras trabajadas en una empresa, sabiendo que cuando
las horas de trabajo exceden de 40, el resto se consideran horas extras y que estas se pagan al doble de una hora normal cuando no excedan
de 8; si las horas extras exceden de 8 se pagan las primeras 8 al doble de lo que se pagan las horas normales y el resto al triple.
*/


function ejercicio7OnClick(){
    const container = document.querySelector(".containerEjercicio07");

    const input00 = document.getElementById("input0Ejercicio7");
    const input01 = document.getElementById("input1Ejercicio7");

    let input00Values = parseFloat(input00.value);
    let input01Values = parseFloat(input01.value);

    if(isNaN(input00Values) || isNaN(input01Values) || input00Values < 0 || input01Values < 0){
        alert("Ejercicio 2. Campos Invalidos");
        return;
    }
    else{

        let sueltoT = ejercicio7(input00Values, input01Values);
        
        let existNewP = document.getElementById("parrafo00");

        if(!existNewP){
            let newP = document.createElement('p');
            newP.textContent = "Suelto Total: " + sueltoT;
            newP.id = "parrafo00";

            container.appendChild(newP);
        }
        else{
            existNewP.textContent = "Suelto Total " + sueltoT ;
        }

    }

}

function ejercicio7(monto, horas){

    let montoTotal = 0;

    for(i = 1; i <= horas; i++){
        if(i <= 40){
            montoTotal += monto;
        }
        else if(i > 40 && i <= 48){
            montoTotal += 2*monto;
        }
        else{
            montoTotal += 3*monto;
        }
    }

    return montoTotal;
}

console.log(pago(500, 49));



/*
Ejericio 8
Calcular la utilidad que un trabajador recibe en el reparto anual de utilidades si este se le asigna como un porcentaje de su salario
mensual que depende de su antigüedad en la empresa de acuerdo con la siguiente tabla:+

Tiempo			 		                    Utilidad
Menos de 1 año	   		                    5% del salario
1 año o más y menos de 2 años	            7% del salario
2 años o más y menos de 5 años 	            10 %del salario
5 años o más y menos de 10 años	            15 % del salario
10 años o más 				                20% del salario.
*/

function ejercicio8OnClick(){
    // Obtener los valores de los inputs
    const salario = parseFloat(document.getElementById("input0Ejercicio8").value);
    const antiguedad = parseFloat(document.getElementById("input1Ejercicio8").value);
    const tiempo = document.getElementById("input2Ejercicio8").value;
    const container = document.getElementById("containerEjercicio08");

    // Validar si el salario y antigüedad están presentes
    if(isNaN(salario) || isNaN(antiguedad)){
        alert("Por favor, ingrese valores válidos para salario y antigüedad.");
        return;
    }

    // Calcular la utilidad
    const utilidad = ejercicio8(salario, antiguedad, tiempo);

    // Verificar si ya existe un párrafo con el resultado
    let existNewP = document.getElementById("parrafoResultado");

    if(!existNewP){
        // Crear un nuevo párrafo si no existe
        let newP = document.createElement("p");
        newP.textContent = `La utilidad correspondiente es: $${utilidad.toFixed(2)}`;
        newP.id = "parrafoResultado";
        container.append(newP);
    } else {
        // Actualizar el párrafo existente
        existNewP.textContent = `La utilidad correspondiente es: $${utilidad.toFixed(2)}`;
    }
}

function ejercicio8(salario, antiguedad , tiempo){
    let utilidad;

    switch(tiempo.toLowerCase()){
        case "anos":
            antiguedad = antiguedad;
            break;
        case "meses":
            antiguedad = antiguedad / 12;
            break;
        case "semanas":
            antiguedad = antiguedad / 48;
            break;
        case "dias":
            antiguedad = antiguedad / 365;
            break;
        default:
            break;
    }

    if(antiguedad > 0  && antiguedad < 1){
        utilidad = salario * 0.05;
    }
    else if(antiguedad >= 1 && antiguedad < 2){
        utilidad = salario * 0.07;
    }
    else if(antiguedad >= 2 && antiguedad < 5){
        utilidad = salario * 0.10;
    }
    else if(antiguedad >= 5 && antiguedad < 10){
        utilidad = salario * 0.15;
    }
    else if(antiguedad >= 10){
        utilidad = salario * 0.20;
    }

    return utilidad;
    
}

console.log(utilidad(500, 0.5, "anos"));
/*
Ejercicio 9
Cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso Construir un validador para un formulario de registro que,
dado el HTML que se proporciona, valide cada uno de los campos cuando el usuario ha terminado de introducir datos en cada uno de ellos,
es decir, al perder el foco. Si el campo no cumple las restricciones, se mostrará una alerta al usuario, pero se le permitirá seguir
introduciendo datos en el resto de campos.
*/




/*
Ejercicio 10
Crear una expresión regular que elimine las etiquetas potencialmente peligrosas (<script>...</script>) y todo su contenido de una cadena
HTML.
*/