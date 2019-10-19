const Next = document.querySelector('#Next_btn');
const Prev= document.querySelector('#Prev_btn');
let point=0;

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
    let cont = point;

    
    if (cont+1>4) {
        point=0;
        DiaArreglo[cont].classList.add('hide');
        DiaArreglo[0].classList.remove('hide');
        alert('Esta es la primera entrada, se volverá a la última.');
    }else{
        point=cont+1;
        DiaArreglo[cont].classList.add('hide');
        DiaArreglo[cont+1].classList.remove('hide');
    }

    console.log('Siguiente pos' + cont)
}
function PrevDay(){
    let DiaArreglo = document.getElementsByClassName('day');
    let cont = point;

    
    if (cont==0) {
        point=DiaArreglo.length-1;
        DiaArreglo[cont].classList.add('hide');
        DiaArreglo[DiaArreglo.length-1].classList.remove('hide');
        alert('Esta es la última entrada, se volverá a la primera.');
    }else{
        point=cont-1;
        DiaArreglo[cont].classList.add('hide');
        DiaArreglo[cont-1].classList.remove('hide');
        
    }

    console.log('Anterior pos pos' + cont+point);
}

