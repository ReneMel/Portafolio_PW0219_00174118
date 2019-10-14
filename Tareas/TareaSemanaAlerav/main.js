const Next = document.querySelector('#Next_btn');
const Prev= document.querySelector('#Prev_btn');

Next.addEventListener('click', ()=>{
        console.log('funciona1');
        NextDay();
});

Prev.addEventListener('click', ()=>{
        console.log('funciona12');
        PrevDay();
});



function NextDay(){
    let DiaArreglo = document.getElementsByClassName('day');
    let cont = 0;

    for (let i = 0; i < DiaArreglo.length; i++) {
        if(DiaArreglo[i].className=='hide'){
            break;            
        } 
        cont++;
    }
    console.log(cont);

    DiaArreglo[cont].classList.toggle('hide');
    DiaArreglo[cont-1].classList.toggle('hide');
}


