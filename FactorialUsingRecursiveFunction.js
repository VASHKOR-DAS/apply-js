// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 5! = 4!*5
// 5! = (5-1)!*5
// n! = (n-1)!*n
// n! = n*(n-1)!



function factorial(n){
    if (n == 0){
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);