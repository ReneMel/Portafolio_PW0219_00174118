function jugar(num){
    var numero= Array();
    var flag=false;

    for (let i = 0; i < 15; i++) {
       numero[i]=math.floor(Math.random()*40);
    }
    for (let j = 0; j < numero.length; j++) {
       if (numero[j]==num) {
           console.log("Correcto");
           flag=true;
           break;    
       }
       
   }
   if (flag==false) {
       console.log("Rip");
   }
}

jugar(7)

