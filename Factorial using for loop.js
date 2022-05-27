// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5

var factorial = 1;
for (var i = 1; i <= 5; i++) {
    factorial = factorial * i
    console.log(i, factorial);
}