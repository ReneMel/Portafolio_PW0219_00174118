let arrayText
function lecturaArray(arrayText){
    let ArregloT=[];
    let cont={};

    arrayText.forEach(element => {
        ArregloT.push(typeof element);
    });
    
    ArregloT.forEach(element => {
        cont[element]=(cont[element]||0)+1;
    });

    console.log(ArregloT);
};
