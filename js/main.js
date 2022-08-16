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

// class Tablero{
    
//     constructor(pColumna, pFila){
//         this.Tablero = [];
//         this.Columna=pColumna;
//         this.Fila=pFila;
//         for(let i=0 ; i<pColumna; i++){
//             let columna =[];
//             for(let j=0; j<pFila;j++){
//                 columna.push(i," ", j," Columna");
//             }
//             this.Tablero.push(columna);
//         }
//     }

// }

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
const CrearJugador = () =>  new Jugador(prompt("Ingrese el nombre del jugador").toUpperCase(), 0);

// const CrearTablero = () => {
//     let opcionMedidas= true;
//     do{
//         let opcion = Number(prompt("Ingrese una opción \n 1 - 4X2  \n 2 - 4X4 \n 3 - 8X8"));
//         let matriz = [];
//         switch(opcion){
//             case 1: 
                
//                 return new Tablero(4,2);
            
//             case 2: 
               
//                 return new Tablero(4,4);

//             case 3: 
                
//                 return new Tablero(8,8);
                
//             default:
//                 alert("Ingrese una opción valida");
//                 break;
//         }
//     }while(opcionMedidas)
// }

//Variables-----------------------------------------------------------------------------
const Jugadores = [];
let opcionValida = true;
const Tablero = [];

//----------------------------------------------------------------------------------------
while (opcionValida){
    let opcion = Number(prompt("Ingrese una opción \n 1 - JUGADOR VS  COM  \n 2 - JUGADOR VS JUGADOR"));
    if(opcion===1){
        Jugadores.push(CrearJugador());
        opcionValida=false;
    }else if(opcion===2){
        Jugadores.push(CrearJugador());
        Jugadores.push(CrearJugador());
        opcionValida=false;
    }else{
        alert("Ingrese una opción valida");
    }
}



//const TableroJuego = CrearTablero();
let ficha = new Ficha("ficha1",1,"nada");
console.log(ficha);

for(tablero of TableroJuego ){
    console.log(tablero.Columna)
}

for (const jugador of Jugadores) {
    console.log(jugador.nombre);
    console.log(jugador.jugador);
}