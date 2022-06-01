// === HELPERS === 

//Evaluar si es par 
function esPar (numerito) {
    //evaluación simplificada
    return (numerito % 2 === 0);
};

function calcularMediaAritmetica (lista) {
    //metodo de los arrays "reduce()" que recibe como parametro un metodo de 2 parametros donde realizamos la operacion con cada elemento
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

// === CALCULADORA DE MEDIANAS === 
//Calcular la mediana general
function medianaSalarios (lista){

    //Obtener la mitad para entrar o consultar sn decimales
    const mitad = parseInt(lista.length / 2 );
  
    //Evaluar si es par para obtener promedio de 2 valores u obtener 
    //el valor por ser impar 
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];
  
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
  };


//=== MEDIANA GENERAL ===

//guardar solos los salarios con metodo map
const salariosCol = colombia.map(
    function (personita){
        //guardar el salario de cada elemento
        return personita.salary;
    });

//ordenar elementos 
//Nota: el cualquier metodo de array se envia como parametro una funcion anonima
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// === MEDIANA DEL TOP 10% ===

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

//Metodo splice recibe 2 argumentos
// 1 donde queremos hacer el corte
// 2 las tajadas que necesitamos 
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
 