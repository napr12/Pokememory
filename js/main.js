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
const CrearFicha = (nombreObjeto) =>  nombreObjeto = new Ficha(nombreObjeto,Math.floor(Math.random()*100,"nada"))

const CrearJugador = (nombre) =>  new Jugador(nombre, 0);

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

const CrearTablero = (cantidad)=>{
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
}


const Tablero = Fichas.concat(Fichas);
const areaJuego= document.getElementsByClassName('juego')[1];
console.log(areaJuego);
let numeroPieza=1;
for(pieza of Tablero ){
    let img = document.createElement("img");
    img.setAttribute("class", `ficha f${numeroPieza}` );
    img.setAttribute("src","../img/volteado.jpg");
    img.setAttribute("id", `f${numeroPieza}`);
    console.log(img);
    areaJuego.appendChild(img);
    numeroPieza++;
}
console.log(areaJuego);
/*const jugar = (jugador) =>{
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
*/
for (const jugador of Jugadores) {
    console.log(jugador.nombre);
    console.log(jugador.jugador);
}
let com = document.getElementById("com");
let formJugador = document.getElementsByClassName('jugador')[0]; 
com.onclick = () => formJugador.style.cssText=`display: inline;`
let jugar = document.getElementById("jugar");
let player1 = document.getElementById("player1");
let tamanio = document.querySelector("input[name=tamanio]:checked");
jugar.onclick = () => Jugadores.push(CrearJugador(player1.value))
//jugar.onclick = () =>CrearTablero(tamanio.values)