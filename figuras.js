console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}; 
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
 return lado * lado;
};
//console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();



//código del triángulo
console.group("Triángulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo  = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo*alturaTriangulo) / 2;
console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm."
);
console.log("La altura de triángulo es : " + alturaTriangulo + " cm");
console.log("El perímetro del triángulo es : " + perimetroTriangulo + " cm");
console.log("El área del triángulo es: " + areaTriangulo + " cm^2"); */

function perimetroTriangulo (lado1, lado2 , base){
    
    var  perimetro  = lado1 + lado2 + base;
    return perimetro;
};

function areaTriangulo (base, altura){
    return (base*altura) / 2;
};

console.groupEnd();




//código del circulo
console.group("Circulos");

/* 
// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("el diámetro del círculo es : " + diametroCirculo + " cm");

//Circunferencia
const perimetroCirculo = diametroCirculo * Pi; 
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * Pi;
console.log("El área del círculo es: " + areaCirculo + " cm^2");
 */

//Pi
const Pi = Math.PI;
//console.log("PI es: " + Pi + " cm");


function diametroCirculo(radio){
    return radio * 2;
};

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * Pi;
};

function areaCirculo(radio){
    return (radio * radio) * Pi;
};

console.groupEnd();


//Aqui interactuamos con el HTML

//cuadrados
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
};

//Triangulos
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("Lado1Triangulo");
    const Lado1 = inputLado1.value;
    const inputLado2 = document.getElementById("Lado2Triangulo");
    const Lado2 = inputLado2.value;
    const inputBase = document.getElementById("BaseTriangulo");
    const Base = inputBase.value;

    const perimetro = perimetroTriangulo(Lado1, Lado2, Base);
    alert(perimetro);
};

function alturaTriangulo (){
    console.log("Entre");
    const inputLado1 = document.getElementById("Lado1Triangulo");
    const Lado1 = inputLado1.value;
    const inputLado2 = document.getElementById("Lado2Triangulo");
    const Lado2 = inputLado2.value;
    const inputBase = document.getElementById("BaseTriangulo");
    const Base = inputBase.value;

    const altura = alturaTrianguloIsoceles(Lado1, Lado2, Base);
    alert(altura);
    
};

function alturaTrianguloIsoceles(Lado1, Lado2, Base){
    if (Lado1 != Lado2) {
        console.log("Los lados a y b no son iguales");
        alert("Los lados a y b no son iguales");
        console.log("Error");
    } else{
        const trianguloPequenoLadoB = Base / 2;
        const trianguloPequenoLadoBase =  Lado1;

        //Formula
        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado-trianguloPequenoLadoBCuadrado);
        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
};


