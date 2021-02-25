window.addEventListener("load", function (){

    let imagenes = [ ];
    imagenes[0] = "imagenes/fotoconeltano.jpeg";
    imagenes[1] = "imagenes/fotocumpletano.jpeg";
    imagenes[2] = "imagenes/fotoenelcineconeltano.jpeg";
    //imagenes[3] = "imagenes/fotoconeltano.jpeg";
    //imagenes[4] = "imagenes/fotoconeltano.jpeg";
    //imagenes[5] = "imagenes/fotoconeltano.jpeg";

    let indiceImagenes = 0;
    let tiempo = 1000;

    function cambiarImagenes(){

        document.slider.src = imagenes[indiceImagenes];
        
        if(indiceImagenes < imagenes.length){

            indiceImagenes++;
        }
        else{

            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes, tiempo);
});


window.addEventListener("mouseover", play);
window.addEventListener("click", play);

function play(){

    document.getElementById("audio").play();
}