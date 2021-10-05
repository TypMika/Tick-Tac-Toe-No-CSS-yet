

var bandera = false;
var turno = 0;
var tab =  [];

window.onload = function(){
    var iniciar = document.getElementById("iniciar");
    iniciar.addEventListener("click",comenzar);

}

function comenzar()  {
    bandera = true;
    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");
   if (jugador1.value==""){
       alert("Falta el numbre del jugador1");
   }else{
       if(jugador2.value==""){
           alert("Falta el nombre del jugador2");
       }else{
        tab[0] = document.getElementById("b0");
        tab[1] = document.getElementById("b1");
        tab[2] = document.getElementById("b2");
        tab[3] = document.getElementById("b3");
        tab[4] = document.getElementById("b4");
        tab[5] = document.getElementById("b5");
        tab[6] = document.getElementById("b6");
        tab[7] = document.getElementById("b7");
        tab[8] = document.getElementById("b8");
        console.log(tab);
        for (var i = 0 ;  i < 9 ; i++){
            tab[i].value = "I"
        }
        turno = 1;
        document.getElementById("turnoJugador").innerHTML =
        "Adelante Jugador" + jugador1.value;
       }
   }
    
}

function colocar(boton) {
    if(bandera==true){
        if(turno ==1 && boton.value=="I"){
            turno = 2; 
            document.getElementById("turnoJugador"),innerHTML =   "Adelante Jugador" + jugador2.value; 
            boton.value = "X"
        }else{
            if(turno ==2 && boton.value=="I"){
                turno = 1; 
                document.getElementById("turnoJugador"),innerHTML =   "Adelante Jugador" + jugador1.value; 
                boton.value = "O"
            }
        }
    }
    winnerChecker()
}

function winnerChecker() {
    if((tab[0].value == "X" && tab[1].value == "X" && tab[2].value == "X") 
    ||  (tab[3].value == "X" && tab[4].value == "X" && tab[5].value == "X")
    ||  (tab[6].value == "X" && tab[7].value == "X" && tab[8].value == "X")
    ||  (tab[0].value == "X" && tab[3].value == "X" && tab[6].value == "X")
    ||  (tab[1].value == "X" && tab[4].value == "X" && tab[7].value == "X")
    ||  (tab[2].value == "X" && tab[5].value == "X" && tab[8].value == "X")
    ||  (tab[0].value == "X" && tab[4].value == "X" && tab[8].value == "X")
    ||  (tab[2].value == "X" && tab[4].value == "X" && tab[6].value == "X" )
    ) {
            alert("El ganador es el jugador "+jugador1.value)
            bandera= false;
    }

    if((tab[0].value == "O" && tab[1].value == "O" && tab[2].value == "O") 
    ||  (tab[3].value == "O" && tab[4].value == "O" && tab[5].value == "O")
    ||  (tab[6].value == "O" && tab[7].value == "O" && tab[8].value == "O")
    ||  (tab[0].value == "O" && tab[3].value == "O" && tab[6].value == "O")
    ||  (tab[1].value == "O" && tab[4].value == "O" && tab[7].value == "O")
    ||  (tab[2].value == "O" && tab[5].value == "O" && tab[8].value == "O")
    ||  (tab[0].value == "O" && tab[4].value == "O" && tab[8].value == "O")
    ||  (tab[2].value == "O" && tab[4].value == "O" && tab[6].value == "O" )
    ) {
            alert("El ganador es el jugador "+jugador2.value)
            bandera= false;
    }
}