//Calculo de figuras geometricas

//FUNCIONES CORRESPONDIENTES PARA EL CALCULO DE CADA FIGURA

//CUADRADO
console.group("Cuadrados");

//Calculo de Perimetro
function perimetroCuadrado(lado){
    return lado*4;
}
perimetroCuadrado();


//Calculo de Area
function areaCuadrado(lado){
    return lado*lado;
}
areaCuadrado();

console.groupEnd();

//TRIANGULO
console.group("Triangulos");
//Calculo de Perimetro
function perimetroTriangulo(lado1,lado2,base){
    const perimetro = (lado1 + lado2 + base);
    return perimetro;
}
perimetroTriangulo();


//Calculo de Area
function areaTriangulo(base,altura){
    return (base*altura)/2;
}
areaTriangulo();

console.groupEnd();

//CIRCULO
console.group("Circulos");

//Calculo el Diametro
function diametroCirculo(radio){
        return radio*2;
}
diametroCirculo();

//Calculo la Circunferencia
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*Math.PI;
}
perimetroCirculo();

//Calculo el Area
function areaCirculo(radio){
    return (radio*radio) *Math.PI;
}

console.groupEnd();



//INTERACION CON HTML
//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value=input.value;

    const perimetro = perimetroCuadrado(value);
    //Se muestra un mensaje como alerta con la respuesta
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value=input.value;

    const area = areaCuadrado(value);
    //Se muestra un mensaje como alerta con la respuesta
    alert(area);
}

//CIRCULO
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value=input.value;

    const perimetro = perimetroCirculo(value);
    //Se muestra un mensaje como alerta con la respuesta
    alert(perimetro);

}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value=input.value;

    const area = areaCirculo(value);
    //Se muestra un mensaje como alerta con la respuesta
    alert(area);
}

//TRIANGULO
function calcularPerimetroTriangulo(){
    const InputTriangulo1 = document.getElementById("InputTriangulo1");
    const InputTriangulo2 = document.getElementById("InputTriangulo2");
    const InputBaseTriangulo = document.getElementById("InputBaseTriangulo");
    const l1=parseInt(InputTriangulo1.value);
    const l2=parseInt(InputTriangulo1.value);
    const b=parseInt(InputBaseTriangulo.value);

    const perimetro = perimetroTriangulo(l1,l2,b);
    //Se muestra un mensaje como alerta con la respuesta
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const InputBaseTriangulo = document.getElementById("InputBaseTriangulo");
    const InputAlturaTriangulo = document.getElementById("InputAlturaTriangulo");
    const b=parseInt(InputBaseTriangulo.value);
    const a=parseInt(InputAlturaTriangulo.value);

    const area = areaTriangulo(b,a);
    //Se muestra un mensaje como alerta con la respuesta
    alert(area);
}