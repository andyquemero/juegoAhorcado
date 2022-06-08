let palabras = ["ARGENTINA","WARCRAFT","FUTBOL","CERDITO","ASADO","PROGRAMAR","CAPITAL","HURACAN","TRABAJO"];
const tablero = document.getElementById("horca").getContext("2d");
let letras = [];
let palabraCorrecta = "";
let errores = 9;
alert("BIENVENIDO AL JUEGO DEL AHORCADO TENDRAS " + errores + " INTENTOS.\n PARA ADIVINAR LA PALABRA SECRETA. MUCHA SUERTE")


function escojerPalabra(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta)

    return palabraSecreta
}

function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.stokeStyle = "#0A3871";
    tablero.beginPath();

    let ancho = 500/palabraSecreta.length;
    for(i = 0; i<palabraSecreta.length; i++){

        tablero.moveTo(300+(ancho*i),440)
        tablero.lineTo(350+(ancho*i),440)
    }
    tablero.stroke();
    tablero.closePath();

}dibujarLineas(escojerPalabra());

function dibujarLetra(index){

    tablero.font = "bold 40px Roboto"
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.beginPath();
    
    let ancho = 500/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 310+(ancho*index),410);

}

function dibujarLetraIncorrecta(letra, errorsLeft){
    
    tablero.font = "bold 20px Roboto"
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "darkRed";
    tablero.beginPath();
    
    tablero.fillText(letra,235+(40*(10-errorsLeft)), 510,40);

}

/*function dibujarIntentos(letra, errorsLeft){
    


    tablero.font = "bold 10px Roboto"
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "darkRed";
    tablero.beginPath();
    
    tablero.fillText(letra,235+(40*(10-errorsLeft)), 510,40);

}*/


function validarLetraIngresada(key){

    if(letras.length<1 || letras.indexOf(key)<0){
        letras.push(key);
        return false;
    }
    else{
        letras.push(key);
        return true;
    }
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
}

function adicionarLetraIncorrecta(letter){

    if(palabraSecreta.indexOf(letter)<=0){
        errores-=1;
    }
    if(errores==0){
        alert("NO TE QUEDAN MAS INTENTOS PERDISTE ");
        location.reload();
    }
}

document.onkeydown = (e) =>{
    let letra = e.key.toUpperCase();
    
    if(!validarLetraIngresada(e.key)){
        if(palabraSecreta.includes(letra)){
            console.log(letra);
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
            for(i=0; i<palabraSecreta.length;i++){
                if(palabraSecreta[i]==letra){
                    dibujarLetra(i);
                }
            }
        }
        else{
            if(!validarLetraIngresada(e.key))return 
                adicionarLetraIncorrecta(letra)
                dibujarLetraIncorrecta(letra,errores);
            
        }
    }

}





