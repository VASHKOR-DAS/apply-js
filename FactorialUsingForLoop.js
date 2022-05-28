// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5

// var factorial = 1;
// for (var i = 1; i <= 5; i++) {
//     factorial = factorial * i
//     console.log(i, factorial);
// }


// for loop diye factorial ber korake bole
// iteration method

// functon diye korte hole

function factorial(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i
    }
    return factorial;
}

var result = factorial(6);
console.log(result);
