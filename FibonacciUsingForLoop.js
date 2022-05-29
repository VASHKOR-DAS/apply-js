// somattor dhara
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// 2 ta element jog korle 3rd element er soman hobe

//https://en.wikipedia.org/wiki/Fibonacci_number

var fibo = [0, 1];
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];
for(var i = 2; i <=12; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2]);
}
console.log(fibo);


// function diye korte chaile 
function fibonacci(n){
    var fibo = [0, 1];
    for(var i = 2; i <=12; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(12)
console.log(result);

