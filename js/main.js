let opcionValida = true;
while (opcionValida){
    let opcion = Number(prompt("Ingrese una opción \n 1 - JUGADOR VS  COM  \n 2 - JUGADOR VS JUGADOR"));
    let jugadorUno;
    let jugadorDos;
    if(opcion===1){
        jugadorUno=prompt("Ingrese nombre del jugador");
        opcionValida=false;
    }else if(opcion===2){
        jugadorUno=prompt("Ingrese nombre del primer jugador");
        jugadorDos=prompt("Ingrese nombre del segundo jugador");
        opcionValida=false;
    }else{
        alert("Ingrese una opción valida");
    }
}

  