function binario( a, b ){ 
    var sum = a + b, binary = '';
     while ( sum > 0 ) { binary = ( sum % 2 ) + binary;
         sum = Math.floor( sum / 2 ); 
        } 
        return binary; 
}

console.log(binario(10));