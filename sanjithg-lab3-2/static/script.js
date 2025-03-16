var x, y , z;
x = 5;
y = 7;
z = x+y;

console.log(z);

var A, B, C;
A = 'Hello ';
B = 'world!';
C = A+B;

console.log(C);

function SumNPrint(x1, x2) {
    var x3 = x1+x2;
    console.log(x3)
}

SumNPrint(x, y);
SumNPrint(A,B);

if(C.length > z) {
    console.log(C);
} else if(C.length < z) {
    console.log(z);
} else {
    console.log('good job!');
}

let L1 = ['Watermelon', 'Pineapple', 'Pear', 'Banana'];
let L2 = ['Apple', 'Banana', 'Kiwi', 'Orange'];

function findTheBanana(banana, arrayName) {
    banana.forEach(function(item){
        if(item == 'Banana'){
            alert('We found a banana in the ' + arrayName + ' array');
        }
    })
}

findTheBanana(L1, 'first');
findTheBanana(L2, 'second');

function greetingFunc() {
        const d = new Date();
        var h;
        h = d.getHours();

        console.log(h)

        if (h<5){
            document.getElementById("name").innerHTML = "Good night, I'm Sanjitha";
        }
        else if(h>5 && h<12){
            document.getElementById("name").innerHTML = "Good morning, I'm Sanjitha";
        }
        else if(h>12 && h<18){
            document.getElementById("name").innerHTML = "Good afternoon, I'm Sanjitha";
        }
        else if(h>18 && h<20){
            document.getElementById("name").innerHTML = "Good evening, I'm Sanjitha";
        }
        else if(h >= 20) {
            document.getElementById('name').innerHTML = "Good night, I'm Sanjitha";
        }
    }
    
console.log(window.location.href.includes)
if (window.location.href.includes('index.html'))
{
    console.log("Hello")
    greetingFunc();
}
    