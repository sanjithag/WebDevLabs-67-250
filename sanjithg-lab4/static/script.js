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

/* function findTheBanana(banana, arrayName) {
    banana.forEach(function(item){
        if(item == 'Banana'){
            alert('We found a banana in the ' + arrayName + ' array');
        }
    })
}

findTheBanana(L1, 'first');
findTheBanana(L2, 'second');
*/

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

function addYear() {
    var currYear = new Date();
    var fullYear = currYear.getFullYear();
    var e = document.getElementById("copyYear");
    e.innerHTML += fullYear;
}

function showList() {
    document.getElementById('list1').style.display = 'block';
    document.getElementById('SeeMoreButton').style.display = 'none';
}

$(document).ready(function() {
    $('#readLess').click(function() {
        $('#longIntro').hide();
        $('#readMore').show();
        $('#readLess').hide();
    });

    $('#readMore').click(function() {
        $('#longIntro').show();
        $('#readLess').show();
        $('#readMore').hide();
        $('#intro').hide();
    });
});

function validate() {
    var name1 = document.getElementById('name');
    var email1 = document.getElementById('email');
    var message1 = document.getElementById('comment');
    var notification = document.getElementById('validateMessage');
    if (!name1.checkValidity()) {
        notification.innerHTML = "Please enter name";
    }
    else if(!email1.checkValidity()) {
        notification.innerHTML = "Please enter email";
    }
    else if(!message1.checkValidity()) {
        notification.innerHTML = "Please enter comment";
    }    
       
}