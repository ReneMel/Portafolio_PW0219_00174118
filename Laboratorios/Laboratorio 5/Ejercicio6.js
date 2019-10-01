function order(array){
    let temp,temp2;
    for (let i = 0; i < array.length; i++) {

            if(array[i]>array[i+1]){
                temp=array[i];
                temp2=array[i+1];
                array[i]=temp2;
                array[i+1]   =temp;
            }

    }

    console.log(array)
}

order(array=[1,2,3,4,8,9,5]);