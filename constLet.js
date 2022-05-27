// kono string er length jante hole

var name = 'Javed';
console.log(name.length);

// again

var name = 'Javed Akbor';
console.log(name.length);

// jodi name 4 er besi hoy tobe name change

if (name.length > 4) {
    name = 'Juvu';
}
console.log(name);

// kono kichu future a change na korle seta
// var er boriborte const (constant), change korle let likhte hoy.


let inch = 156;
let feet = inch/12;
console.log(feet);

// multiple value niye kaj korle function use korte hoy

// ak e kaj bar bar kra lgle take function diye korle easy hoy

function inchToFeet(inch) {
    let feet = inch/12;
    return feet;
}
// function re value baire theke set krte chaile, return use krte hoy

let nanaFeet = inchToFeet(156);
console.log(nanaFeet);
let dadiFeet = inchToFeet(288);
console.log(dadiFeet);