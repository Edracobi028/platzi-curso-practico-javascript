



function calcularMediaAritmetica (lista) {
    /* 
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    };
    */
    //metodo de los arrays "reduce()" que recibe como parametro un metodo de 2 parametros donde realizamos la operacion con cada elemento
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },

    {
        course: "Programación",
        note: 8,
        credit: 5,
    },

    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

function calcularPromedioPonderado (notes) {
    //metodo map ayuda a recorrer los elementos de un array, guardandolo en una variable
    const notesWithCredit = notes.map(
        function (noteObject){
            return noteObject.note * noteObject.credit;
        });
    
    //Sumar todos los elementos del arreglo de elementosmultiplicados por su peso
    const sumOfNotesWithCredit = notesWithCredit.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        });

    //Sumar todos los pesos (créditos)

    //Creamos un array con los puros creditos
    const credits = notes.map(
        function (noteObject){
            return noteObject.credit;
    });

    //sumamos los elementos del arreglo credit
    const sumOfCredits = credits.reduce(
        function (sum = 0, newVal){
            return sum + newVal;
    });

    //División entre ambas sumas
    const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

    return promedioPonderadoNotasConCreditos;

}

