/* console.log('hello world !!!!');*/


/* 
VARIABLES AND DATA TYPES
*/
/*var firstName = 'john';
var lastName = 'campbel';
var age = 28;
console.log(firstName, lastName, age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

/* var 3years = 3; variables cannot start with a number */


//variable naming rules

/*var $3years = 3;
console.log($3years);

var _3months = 5;
console.log(_3months);

/* 
VARIABLE MUTATION AND TYPE COERCION
*/

// type coercion
/*var firstName = 'jOHN';
var age = 25;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + job + ' is ' + age + ' year old ' + ' and is he married ? ' + isMarried);


//variable mutation (reusing the age and job variabes without reusing the var keyword )
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + job + ' is ' + age + ' year old ' + ' but is he married ? ' + isMarried);

var lastName = prompt ("what's his lastname ?");
console.log(firstName + ' ' + lastName);

/* 
BASIC OPERATORS
*/
/*var now, yearJohn,yearMark, ageJohn, ageMark;
now = 2020;
yearJohn = now - 28;
yearMark = now - 33;

ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

 console.log(yearJohn);


console.log(now * 2);
console.log(now + 2);
console.log(now / 10);

var johnOlder = ageJohn < ageMark;
alert('verify if john is older');
var checkBooleen = prompt('is john older than mark?');
console.log(johnOlder + ' ' + ' so the answer is yes !!! ');
 
//type of operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof ageMark);
console.log(typeof 'MArk is older than john');
var x;
console.log(typeof x);

/* 
OPERATOR PRECEDENCE
*/

/*var now, yearJohn, fullAge, isFullAge;
now = 2018;
yearJohn = 1989;
fullAge = 18;

// multiple operators
isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn ;
var ageMark = 35;
//var meanAge = ageJohn + ageMark / 2; not correct : division comes before addition
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments

var x, y , z ;
x = y = (3 + 5) * 4 - 6; //8*4-6=32-6
console.log(x, y);

//more operators 

x *= 2;
console.log(x);
x +=10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

/* 
    CODING CHALLENGE 1 
*/ 

// 1-storing mark and john's height and mass in variables
/*var johnHeight, markHeight, johnMass, MarkMass, JohnBmi, MArkBmi ;

johnHeight = 1.85; //meters
markHeight = 1.98; //meters

johnMass = 90; //kg
MarkMass = 110;//kg

// 2-calculating their both BMI

JohnBmi = johnMass / (johnHeight * johnHeight);
MArkBmi = MarkMass / (markHeight * markHeight);

console.log(JohnBmi);
console.log(MArkBmi);


// 3- create a boolean variable to see if Mark has a higher bmi than John
//var isMarkBmiHigher = MArkBmi > JohnBmi ;
//console.log(' is Mark\'s BMI higher than John\'s? ' + ' ' + isMarkBmiHigher);

if (MArkBmi > JohnBmi) {
    console.log(' MArk\'s BMI is Higher than John\'s ');
} else {
    console.log(' John\'s BMI is Higher than MArk\'s ');
}


/* IF AND ELSE STATEMENTS */

/*var firstName, civilStatus;
firstName = 'John';
civilStatus='married';

if (civilStatus === 'married') {
    console.log(firstName + ' is married ');
} else {
    console.log(firstName + ' will hopefully be married sooon ');
}

var isMarried = false;

if (isMarried) {
    console.log(firstName + ' is married ');
} else {
    console.log(firstName + ' will hopefully be married sooon ');
}


/* BOOLEAN LOGIC */

/*var firstName, age;
firstName = 'John';
age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy ');
} else if (age >= 13 && age < 20){ // age between 13 and 20 === age >= 13 and age < 20
    console.log(firstName + ' is a teenager ');
}else if (age >= 20 && age < 30){ 
    console.log(firstName + ' is a young man ');
}
else {
    console.log(firstName + ' is a man ');
}

/* TERNARY OPERATOR AND SWITCH STATEMENTS */

// Ternary operator
/*var firstName, age;
firstName = 'John';
age = 22;

age >= 18 ? console.log (firstName + ' drinks beer ')
: console.log(firstName + ' drinks juice ');

var drink = age >= 18 ? 'beer': 'juice';
console.log(drink);

// the code below is the same but using the ternary operator is better if we only have one value to set for a variable
/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/ 

// Switch statement

/*var job = 'instructor';
switch (job){

    case 'teacher' : 
    case 'instructor':    
        console.log(firstName + ' teaches how to code ');
        break;
    case 'nurse' : 
        console.log(firstName + ' works at the hospital ');
        break;
    case 'engineer' : 
        console.log(firstName + ' designs planes ');
        break;
    case 'baker' : 
        console.log(firstName + ' makes and sells bread ');
        break;
    default:
        console.log(firstName + ' does something else ');

}

// let's turn the code below into switch statement
var firstName, age;
firstName = 'John';
age = 10;

/*if (age < 13) {
    console.log(firstName + ' is a boy ');
} else if (age >= 13 && age < 20){ // age between 13 and 20 === age >= 13 and age < 20
    console.log(firstName + ' is a teenager ');
}else if (age >= 20 && age < 30){ 
    console.log(firstName + ' is a young man ');
}
else {
    console.log(firstName + ' is a man ');
}*/

/*switch(true){

    case age < 13:
        console.log(firstName + ' is a boy ');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager ');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man ');
        break;
    default:
        console.log(firstName + ' is a man ');
}

/* 
    TRUTHY, FALSY VALUES AND EQUALITY OPERATORS
*/

/*var height;

height = 18; // without this line of code the variable stays undefined

if (height || height === 0) {
    console.log(' the variable is defined ');
} else {
    console.log(' the variable has NOT been defined ');
}


// Equality operators
var length = 23;
if (length == '23') {
    console.log(' the == operator Does type coercion !!! ')
} ;

// the code below will appear as false but is best practice (no type coercion)
if (length === '23') {
    console.log(' the == operator Does type coercion !!! ')
} ;

/* 
    CODING CHALLENGE 2 
*/ 

// 1-Calculate the average score for each team

/*var game1TeamJohn, game2TeamJohn, game3TeamJohn, averageTeamJohn, game1TeamMike, game2TeamMike, game3TeamMike, averageTeamMike, 

game1TeamJohn = 89 ;
game2TeamJohn = 120;
game3TeamJohn = 103;

averageTeamJohn = (game1TeamJohn + game2TeamJohn + game3TeamJohn) / 3;
console.log('John\'s team average score is : ' + averageTeamJohn )

game1TeamMike = 116;
game2TeamMike = 94; 
game3TeamMike = 123;

averageTeamMike = (game1TeamMike + game2TeamMike + game3TeamMike) / 3;
console.log('Mike\'s team average score is : ' + averageTeamMike )

// 2-Decide which team wins in average and print its score // 3 -change the scores to show different winners

/* if (averageTeamJohn > averageTeamMike) {
    console.log('the winner team is John\'s team and is equal to : ' + averageTeamJohn);
} else if (averageTeamJohn < averageTeamMike) {
    console.log('the winner team is Mike\'s team and is equal to : ' + averageTeamMike);
} else {
    console.log('We\'ve got a Draw');
} */

// 4-Add Mary as a new player and print the new average winner to the console

/*var game1TeamMary = 97 ;
var game2TeamMary = 134;
var game3TeamMary = 105;

averageTeamMary = (game1TeamMary + game2TeamMary + game3TeamMary) / 3;
console.log('MAry\'s team average score is : ' + averageTeamMary);


if (averageTeamJohn > averageTeamMike && averageTeamJohn > averageTeamMary) {
    console.log('the winner team is John\'s team and is equal to : ' + averageTeamJohn);
}

else if (averageTeamJohn < averageTeamMike && averageTeamJohn < averageTeamMary &&  averageTeamMike > averageTeamMary) {
    console.log('the winner team is Mike\'s team and is equal to : ' + averageTeamMike);
} 

else if (averageTeamMary > averageTeamJohn && averageTeamMary > averageTeamMike) {
    console.log('the winner team is Mary\'s team and is equal to : ' + averageTeamMary);
} 

else {
    console.log('We\'ve got a Draw');
}

/* 
    FUNCTIONS
*/

/*function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJohn);


function yearsUntilretirement(year , firstName){

    var age = calculateAge(year)
    var retirementAge = 65 - age;
    console.log(firstName + ' retires in ' + retirementAge + ' years ');

    if (retirementAge > 0) {
        console.log(firstName + ' retires in ' + retirementAge + ' years ');
    } else {
        console.log(firstName + ' is already retired ');
    }
}

yearsUntilretirement(1990, 'John');
yearsUntilretirement(1948, 'Mike');
yearsUntilretirement(1989, 'JAne');


/* 
    FUNCTION STATEMENTS AND EXPRESSIONS
*/

// function declaration

//function whatDoyouDo(job, firstName){}

// function expression


/*var  whatDoyouDo = function(job, firstName){

    switch(job){

        case 'teacher' : 
        case 'instructor':    
            return(firstName + ' teaches how to code '); // break statement is not needed since the return goes back to the beginning of the function after the case is met
        case 'nurse' : 
            return(firstName + ' works at the hospital ');
        case 'engineer' : 
            return(firstName + ' designs planes ');
        case 'baker' : 
            return(firstName + ' makes and sells bread ');
        default:
            return(firstName + ' does something else ');

    }

 }

 console.log(whatDoyouDo('engineer', 'John'));
 console.log(whatDoyouDo('baker', 'Jane'));
 console.log(whatDoyouDo('nurse', 'Mozes'));


 /* 
    ARRAYS
*/

// Initialize a new array

/*var names = ['John', 'Mike', 'Jane'];
var years = new Array(1990,1989,1948);

console.log(names);
console.log(years);

// Mutate array data 

names[2] = 'Mozes';
console.log(names[1]);
console.log(names.length);
console.log(names);
names[names.length] = 'Doudou';
console.log(names);

// Different data types 

var john = ['John', 'smith', 1990, 'designer', false];

// adding elements
john.push(198); // add an element at the end of the array
john.unshift('Mr.');// add an element at the first position

// removing elements
john.shift([0]); //remove the first element of the array 
john.pop(john.length); // same as john.pop(198); // remove the element at the end of the array 

// display position of elements
console.log(john.indexOf('smith'));// show the position of an an element in the array (test if an element is in an array or not

console.log(john);

// example

var existence = john.indexOf('designer') === -1 ? 'john is not a designer':'john is a designer';
console.log(existence)


/* 
  CODING CHALLENGE 3 : BUILDING A TIP CALCULATAOR
*/

/*function tipCalculator(bill){

    var percent;

    if (bill < 50) {
        percent = .2
    } else if (bill >=50 && bill < 200) {
        percent = .15
    } else {percent = .1}

    return percent * bill;


}

console.log(tipCalculator(10));
var bills =[124, 48, 268];
var tips = [tipCalculator(bills[0]),
             tipCalculator(bills[1]), 
             tipCalculator(bills[2])];

console.log(bills);
console.log(tips);

var finalValues = [ bills[0] + tips[0], 
                        bills[1] + tips[1],
                            bills[2] + tips[2]]; 

console.log(finalValues);


/* 
    OBJECTS AND PROPERTIES
*/

// Object literal
/*var john = {

    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : ['Jane', 'MArk', 'Bob', 'Emily'],
    job :'teacher',
    isMarried : false


};

console.log(john.firstName); // method 1 to retrieve an element from the object
console.log(john['lastName']); // method 2 to retrieve an element from the object
var x = 'birthYear';
console.log(john[x]);// method 3 to retrieve an element from the object

john.job = 'designer'; // mutate properties in the object
console.log(john.job);

john['isMarried'] = true;
console.log(john.isMarried)

// New object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1989;
jane['lastname'] = 'Smith';
console.log(jane);
console.log(jane.birthYear);
console.log(jane['firstName']);

/* 
    OBJECTS AND METHODS
*/

// var john = {

//     firstName : 'John',
//     lastName : 'Smith',
//     birthYear : 1993,
//     family : ['Jane', 'MArk', 'Bob', 'Emily'],
//     job :'teacher',
//     isMarried : false,

//     calcAge : function(birthYear){

//         return 2018 - birthYear // first method

//     }
// };

// console.log(john.calcAge(1993));


// var john = {

//     firstName : 'John',
//     lastName : 'Smith',
//     birthYear : 1989,
//     family : ['Jane', 'MArk', 'Bob', 'Emily'],
//     job :'teacher',
//     isMarried : false,

//     calcAge : function(){

//          return 2018 - this.birthYear; // second method

//     }


// };


// console.log(john.calcAge());

/*var john = {

    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1976,
    family : ['Jane', 'MArk', 'Bob', 'Emily'],
    job :'teacher',
    isMarried : false,

    calcAge : function(){

         this.age = 2018 - this.birthYear; // third method

    }


};
john.calcAge();
console.log(john.age);

/* 
    CODING CHALENGE 4
*/


// 1 - Create for Mark and John 2 objects containing full name, mass and height
// 2 - add a method to each object to calculate the BMI

/*var mark = {

    fullName : 'Mark Smith',
    mass : 98,
    height : 1.10,

    calcBmi : function(){

        this.Bmi = this.mass / (this.height * this.height);
        return this.Bmi;

    } 


}

var john = {

    fullName : 'John Smith',
    mass : 110,
    height : 1.90,

    calcBmi : function(){

        this.Bmi = this.mass / (this.height * this.height);
        return this.Bmi;

    } 


}
john.calcBmi();
mark.calcBmi();
console.log(john, mark);


// 3 - Log to the console the one who has the highest BMI

var highestBMI = function (Bmi,Bmi){

    if (john.Bmi > mark.Bmi) {
        console.log ('John\'s bmi is higher : ' +  john.Bmi);
    } else if (john.Bmi < mark.Bmi) {
        console.log ('Mark\'s bmi is higher : ' +  mark.Bmi);
    } else {

        console.log('both have the same bmi');
    }

}

console.log(highestBMI(john.Bmi,mark.Bmi));

/* 
    LOOPS AND ITERATION
*/


// for loop

// i = 0,0 < 10 true, log i to console, i ++ 
// i = 1,1 < 10 true, log i to console, i ++ 
// ....
// i = 9,0 < 10 true, log i to console, i ++ 
// i = 10,10 < 10 false, exit the loop 



// for(var i = 0; i < 10; i++){
//     console.log(i);   
// };


// for(var i = 0; i <= 20; i += 2){
//     console.log(i);   
// };


// var john = ['John', 'smith', 1990, 'designer', false];


// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
    
// }


// // while loop

// var i = 0;
// while(i < john.length){
//     console.log(john[i]);
//     i++;
// }

// Continue and break statements

/*var john = ['John', 'smith', 1990, 'designer', false, 'blue'];


for (var i = 0; i < john.length; i++) {
    if(typeof john[i] !=='string') continue; // continues if it sees something that is not a string
    console.log(john[i]);
    
}


for (var i = 0; i < john.length; i++) {
    if(typeof john[i] !=='string') break; // breaks if it sees something that is not a string
    console.log(john[i]);
    
}


// looping backwards

for(var i = john.length - 1; i >=0; i--){
    console.log(john[i]);

}

/* 
    CODING CHALLENGE 5
*/

// function tipCalculator(bill){

//     var percent;

//     if (bill < 50) {
//         percent = .2
//     } else if (bill >=50 && bill < 200) {
//         percent = .15
//     } else {percent = .1}

//     return percent * bill;


// }

// console.log(tipCalculator(10));
// var bills =[124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//              tipCalculator(bills[1]), 
//              tipCalculator(bills[2])];

// console.log(bills);
// console.log(tips);

// var finalValues = [ bills[0] + tips[0], 
//                         bills[1] + tips[1],
//                             bills[2] + tips[2]]; 

// console.log(finalValues);

// 1- Create an object with an array for the bill values

var john = {
    fullName : 'John Smith',
    bills : [124,48,268,180,42],
    calcTips : function(){

        for(var i = 0; i < this.bills.length; i++){

            this.tips = [];
            this.finalValues =[];
            
           // determine the percentage based on tiping rules 
           
            var percent;
            var bill = this.bills[i];

            if (bill < 50) {
                percent = .2
            } else if (bill >=50 && bill < 200) {
                percent = .15
            } else {percent = .1}
       
            // add results to the correspondin arrays
       
            this.tips[i] = bill * percent;
            this.finalValues[i] = bill + bill * percent;

        }
     
    }

}



