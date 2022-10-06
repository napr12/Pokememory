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
const CrearFicha = async ()=>{
    //nombreObjeto = new Ficha(nombreObjeto,Math.floor(Math.random()*100,"nada"));
    let id =  Number(crearID());
    const obtenerFicha = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`);
    const dataFicha = await obtenerFicha.json();
    return new Ficha(dataFicha.name, dataFicha.id, dataFicha.sprites.front_default); 
}  
const crearID = () =>{
    let identificador = 1; 
    while(Fichas.some((el) => el.id === identificador)){
        identificador =  Math.floor(Math.random()*100);
        console.log("Entra");
    }
    return identificador;
}
const sleep =  () =>  new Promise( async (resolve) => setTimeout(()=>resolve(console.log("Espera 2 segundos")),200))
const CrearJugador = nombre => new Jugador(nombre, 0) ;
const Encontrar = (ficha1, ficha2) =>{  
    if(ficha1 == ficha2){
        console.log("Entra Ecnontra")
        return true;
    }
       return  false;
}
const sumarPts= jugador=> jugador.puntaje++;
const Iniciar = async (e) =>{
    e.preventDefault();
    let datos = e.target;
    Jugadores.push(CrearJugador(datos.children[1].value));
    if(datos.children[3].checked){
        await CrearTablero(Number(datos.children[3].value));
        saludar(Jugadores[0].nombre);
    }else if (datos.children[5].checked){
        await CrearTablero(Number(datos.children[5].value));
        saludar(Jugadores[0].nombre);
    }else {
        alertaError("DEBE SELECCIONAR UNA OPCIÓN VALIDA","REINTENTAR");
    }
    let tarjetas = document.getElementsByClassName("ficha");
    console.log("Llega");
    for (const element of tarjetas) {
        element.onclick = async (e) => { 
            e.preventDefault();
            let datos = e.target;
            let posicion = Number(datos.id[1])-1;
            datos.src = Tablero[posicion].imagen;
            datos.className += " Volteado";
            if(document.getElementsByClassName('Volteado').length==2){
                await sleep();
                if(!Encontrar(document.getElementsByClassName('Volteado')[0].src, document.getElementsByClassName('Volteado')[1].src))
                {
                    document.getElementsByClassName('Volteado')[0].setAttribute("src","../img/volteado.jpg");
                    document.getElementsByClassName('Volteado')[1].setAttribute("src","../img/volteado.jpg");
                }else{
                    document.getElementsByClassName('Volteado')[0].className += " Encontrada";
                    document.getElementsByClassName('Volteado')[1].className += " Encontrada";
                    sumarPts(Jugadores[0]);
                }
                document.getElementsByClassName('Volteado')[1].classList.remove("Volteado");
                document.getElementsByClassName('Volteado')[0].classList.remove("Volteado");
                console.log("Compara")
            }
            
        };
    }
}

const alertaError = (textoMensaje, buttonTexto) => {
    swal({
        text: textoMensaje,
        icon:"./img/Error.jpg",
        button:buttonTexto});
}
const CrearTablero = async (cantidad) => {
    let numeroPieza=1;
    Tablero.splice(0, Tablero.length);
    Fichas.splice(0, Fichas.length)   
    console.log(Fichas.length, Tablero.length);
    switch(cantidad){
        case 1:
            for(let i=0 ; i<2 ; i++){
                Fichas.push( await CrearFicha());
            } 
            break;
        case 2: 
            for(let i=0 ; i<4 ; i++){
                Fichas.push(await CrearFicha());
            } 
            break;
    }
    //Fichas.sort(()=>Math.random()-0.5);
    Tablero.push(...Fichas.sort((a,b)=>a.id - b.id));
     
    Tablero.push(...Fichas.sort((a,b)=>{ 
        if(a.nombre<b.nombre){
            return 1;
        }
        if(a.nombre>b.nombre){
            return -1;
        }
        return 0;
    }));
    
    console.log(...Tablero);
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