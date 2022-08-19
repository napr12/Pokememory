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



//Fuciones -----------------------------------------------------------------------------
const CrearFicha = (nombreObjeto) =>  nombreObjeto= new Ficha(nombreObjeto,Math.floor(Math.random()*100,"nada"))

const CrearJugador = () =>  new Jugador(prompt("Ingrese el nombre del jugador").toUpperCase(), 0);

const Encontrar = (ficha1, ficha2) => { 
    if(ficha1.id === ficha2.id){
        return true;
    }else{
        return false
    }
}
const sumarPts= jugador=> jugador.puntaje++;
//Variables-----------------------------------------------------------------------------
const Jugadores = [];
let opcionValida = true;
const Fichas = [];

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

do{
    let cantidad = Number(prompt("Ingrese el tamaño del tablero: \n 1 - 2 x 2 \n 2 - 4 X2 \n 3- 4x4"));
    switch(cantidad){
        case 1:
            for(let i=0 ; i<2 ; i++){
                Fichas.push(CrearFicha(i));
            } 
            break;
        case 2: 
            for(let i=0 ; i<4 ; i++){
                Fichas.push(CrearFicha(i));
            } 
            break;
        case 3:
            for(let i=0 ; i<8 ; i++){
                Fichas.push(CrearFicha(i));
            }
            break; 
    } 
}while(opcionValida);


const Tablero = Fichas.concat(Fichas);

const jugar = (jugador) =>{
    let opcion1= Number(prompt("Ingrese el número de la ficha"));
    let opcion2= Number(prompt("Ingrese el número de la ficha"));
    while(Encontrar(opcion1, opcion2)){
        indice1=Tablero.indexOf(ficha1.id);
        Tablero.splice(indice1,1);
        indice2=Tablero.indexOf(ficha2.id);
        Tablero.splice(indice2,1);
        opcion1=Number(prompt("Ingrese el número de la ficha"));;
        opcion2=Number(prompt("Ingrese el número de la ficha"));;
    }
}

for (const jugador of Jugadores) {
    console.log(jugador.nombre);
    console.log(jugador.jugador);
}