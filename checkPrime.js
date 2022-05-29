// prime number holo moulic songha.
// jeta sudhu matro oi songha & 1 diyei vag jay

// Now 18 moulic songha kina ta amra dekhbo

var n = 18;

for (i = 2; i < n; i++) {
    //console.log(i, n % i);
}

// 2nd step

var n = 18;

for (i = 2; i < n; i++) {
    //console.log(i, n % i);
    if (n % i == 0) {
        //console.log('Not a prime number');
        break;
        //break na korle 'Not a prime number' show korar poreo bar bar loop cholbe
    }
    else {
        //console.log('Your number is a prime number')
        break;
        //break na korle 'Not a prime number' show korar poreo bar bar loop cholbe
    }
}

// Function diye korte chaile

function isPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime number';
            //return korle break kora lagena, auto break hoye jay
        }
    }
    return 'Your number is a prime number'
    //return korle break kora lagena, auto break hoye jay
}
var result = isPrime(139);
console.log(result);