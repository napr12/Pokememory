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
//----------------------------------------------------------------------------------------
//Fuciones -------------------------------------------------------------------------------
const CrearFicha = nombreObjeto =>  nombreObjeto = new Ficha(nombreObjeto,Math.floor(Math.random()*100,"nada"));
const CrearJugador = nombre =>  new Jugador(nombre, 0);
const Encontrar = (ficha1, ficha2) =>  ficha1.id == ficha2.id ?  true :  false;
const sumarPts= jugador=> jugador.puntaje++;
const Iniciar = (e) =>{
    e.preventDefault();
    let datos = e.target;
    Jugadores.push(CrearJugador(datos.children[1].value));
    if(datos.children[3].checked){
        CrearTablero(Number(datos.children[3].value));
        saludar(Jugadores[0].nombre);
    }else if (datos.children[5].checked){
        CrearTablero(Number(datos.children[5].value));
        saludar(Jugadores[0].nombre);
    }else if (datos.children[7].checked){
        CrearTablero(Number(datos.children[7].value));
        saludar(Jugadores[0].nombre);
    }else{
        alertaError("DEBE SELECCIONAR UNA OPCIÓN VALIDA","REINTENTAR")
    }
    
}
const alertaError = (textoMensaje, buttonTexto) => {
    swal({
        text: textoMensaje,
        icon:"./img/Error.jpg",
        button:buttonTexto});
}
const CrearTablero = (cantidad)=>{
    let numeroPieza=1;
    Tablero.splice(0, Tablero.length);
    Fichas.splice(0, Fichas.length)   
    console.log(Fichas.length, Tablero.length);
    switch(cantidad){
        case 1:
            for(let i=0 ; i<2 ; i++){
                Fichas.push(CrearFicha(i));
                Tablero.push(Fichas[i]);
                Tablero.push(Fichas[i]);
            } 
            break;
        case 2: 
            for(let i=0 ; i<4 ; i++){
                Fichas.push(CrearFicha(i));
                Tablero.push(Fichas[i]);
                Tablero.push(Fichas[i]);
            } 
            break;
        case 3:
            for(let i=0 ; i<8 ; i++){
                Fichas.push(CrearFicha(i));
                Tablero.push(Fichas[i]);
                Tablero.push(Fichas[i]);
            }
            break; 
    }
    console.log(areaJuego.children);
   while(areaJuego.firstChild){
        areaJuego.removeChild(areaJuego.firstChild);
   }
    for(pieza of Tablero ){
        let img = document.createElement("img");
        img.setAttribute("class", `ficha f${numeroPieza}` );
        img.setAttribute("src","./img/volteado.jpg");
        img.setAttribute("id", `f${numeroPieza}`);
        areaJuego.appendChild(img);
        numeroPieza++;
    }
    
}
const IniciarJuego = () =>{
    const fichas = document.getElementsByClassName("ficha");
    while(fichas.length>0){
        
    }
}
const turno = () =>{
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    Encontrar(ficha)?resolve('Encontro ficha') :reject('No encontro ficha');
                },2000)
        })
}
const saludar = (nombreJugador) =>{
    Toastify({
        text: `Bienvenido ${nombreJugador}`,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #FFCC03, #ef5350)",
          color:"#386ABB",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
//--------------------------------------------------------------------------------------
//Variables-----------------------------------------------------------------------------
const Jugadores = [];
//let opcionValida = true;
const Fichas = [];
const Tablero=[];
const areaJuego= document.getElementsByClassName('juego')[1];
let com = document.getElementById("com");
let formJugador = document.getElementsByClassName('jugador')[0]; 
let formularioJugador = document.getElementById("player1");
let pvp = document.getElementById("pvp");
//const fichasJuego= document.getElementsByClassName("fichas");
//fichasJuego.onclick = () => 
//--------------------------------------------------------------------------------------
//Eventos-------------------------------------------------------------------------------
com.onclick = () => formJugador.style.cssText=`display: inline;`;
pvp.onclick = () => formJugador.style.cssText=`display: inline;`;

formularioJugador.addEventListener("submit",Iniciar);
//-------------------------------------------------------------------------------------