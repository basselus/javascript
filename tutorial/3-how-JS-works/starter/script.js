///////////////////////////////////////
// Lecture: Hoisting

// FUNCTIONS

// We can use the function before decalring it : definition of hoisting

// calculateAge(1945); // the function is stored in the variable object even before the code is executed

// function calculateAge(year){
//     console.log(2018 - year);
// }
// //calculateAge(1979);


// //hoisting only works with function declarations (not function expressions)

// //retirement(1976);

// var retirement = function(year){
//     console.log(65 - (2018 - year));
// }


// // VARIABLES

// console.log(age); //
// var age = 23;

// function foo(){
//     console.log(age) // this is gonna be undefined
//     var age = 65;
//     console.log(age); 
// }
// foo(); // this is stored in the variable object of the foo function execution context
// console.log(age); // this is stored in the global execution (age=23) : in the variable object of the global execution object


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);

/*calculateAge(1985);
function calculateAge(year){
    console.log(2016 - year);
    console.log(this);
}*/


var john = {

    name : 'John',
    yearofBirth : 1990,
    calculateAge : function(){
        console.log(this);
        console.log(2016 - this.yearofBirth);

        /*function innerFunction(){
            console.log(this);
        }
        innerFunction();*/
    }
}

john.calculateAge();


// Method borrowing (using john's method for Mike)

var mike = {
    name :'Mike',
    yearofBirth:1984,
}

mike.calculateAge = john.calculateAge; // in this case we don't have the parenthesis because we just treat the function as a variable
mike.calculateAge();