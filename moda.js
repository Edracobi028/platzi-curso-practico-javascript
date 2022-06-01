
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];
 

function obtenerModa(lista1) {
    
//inicializar vacio
const lista1Count = {};

//metodo map ayuda a recorrer y contabilizar cuantos elementos tenemos igual, guardandolo el conteo en un objeto
lista1.map(
    //creamos una funcion anonima
    function (elemento){
        //Si existe un elemento
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1; //Lo que tiene + uno
        } else {
            lista1Count[elemento] = 1;
        }
    }
);
//convertir un objeto en array con "Object.entries()" ya que el metodo sort solo funciona con arrays

//Ordenamos de menor a mayor
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

//Mostramos el último elemnto del array ordenado
const moda = lista1Array[lista1Array.length - 1];

return moda;
};
