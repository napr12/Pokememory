//Objetos -----------------------------------------------------------------------------------

class Jugador{
    constructor(nombre, puntaje){
        this.nombre = nombre;
        this.puntaje = Number(puntaje);
    }
}

class Ficha{
    constructor(nombre, id, imagen){
        this.nombre = nombre;
        this.id = id;
        this.imagen = imagen;
    }
}

class Tablero{
    constructor(pColumna, pFila){
        this.fila = Number(pFila);
        this.columna = Number(pColumna);
    }
}

//Fuciones -----------------------------------------------------------------------------
const CrearFicha = (nombre, id, nombreObjeto) => {
    for (propiedad in Ficha)
    {   
        if(propiedad == "nombre")
            nombreObjeto.propiedad=nombre;
        else if(propiedad == "id")
            nombreObjeto.propiedad=id;
        else
            continue
    } 
}
const NombreJugador = () => prompt("Ingrese el nombre del jugador").toUpperCase();

const CrarTablero = () => {
    let opcionMedidas= true;
    do{
        let opcion = Number(prompt("Ingrese una opción \n 1 - 4X2  \n 2 - 4X4 \n 3 - 8X8"));
        switch(opcion){
            case 1: 
                return new Tablero(4,2);
            
            case 2: 
                return new Tablero (4,4);
            case 3: 
                return new Tablero (4,4);
            default:
                alert("Ingrese una opción valida");
                break;
        }
    }while(opcionMedidas)
}

//Variables-----------------------------------------------------------------------------
const jugador1 = new Jugador;
const jugador2 = new Jugador;
let opcionValida = true;

//----------------------------------------------------------------------------------------
while (opcionValida){
    let opcion = Number(prompt("Ingrese una opción \n 1 - JUGADOR VS  COM  \n 2 - JUGADOR VS JUGADOR"));
    if(opcion===1){
        jugador1.nombre = NombreJugador();
        opcionValida=false;
    }else if(opcion===2){
        jugador1.nombre = NombreJugador();
        jugador2.nombre = NombreJugador();
        opcionValida=false;
    }else{
        alert("Ingrese una opción valida");
    }
}
const TableroJuego = CrarTablero();

console.log(jugador1, jugador2);
