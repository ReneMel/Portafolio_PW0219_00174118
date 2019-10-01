
let Array1;

function Promedio(Array1) {
    let cant = 0;
    let sum = 0;
    Array1.forEach(number => {
        cant++;        
        sum += number;
    });
    console.log("sumatoria es: "+sum);
    return (sum/cant);
}