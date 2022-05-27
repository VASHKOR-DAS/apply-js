// leap Year gonona kore seta declare kora, alada text add kora

// commonly amra jani kono year k 4 dara vag korle leap Year hoy

const year = 356;
let reminder = year % 4;
if (reminder == 0) {
    console.log('It is a leap Year')
}
else {
    console.log('Not leap Year')
}

// function diye korte chaile

function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder == 0) {
        return true

        // console.log('It is a leap Year')
        // check krte chaile console.log, kaj kora lagle return kore debo

    } else {
        return false
    }
}
const check = isLeapYear(2000)
console.log(check)