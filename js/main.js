//Array
var iceCream = ['Moose Tracks', 'Rocky Road', 'Cookies N Cream'];
iceCream.push('Vanilla');

//Object
var georgeBush = {
    firstName: 'George',
    lastName: 'Bush',
    termLength: '1',
    party: 'Republican',
    yearsOfPresidency: '4 years'
};

var billClinton = {
    firstName: 'Bill',
    lastName: 'Clinton',
    termLength: '2',
    party: 'Democrat',
    yearsOfPresidency: '8 years'
};

var georgeWBush = {
    firstName: 'George W.',
    lastName: 'Bush',
    termLength: '2',
    party: 'Republican',
    yearsOfPresidency: '8 years'
};

var barrackObama = {
    firstName: 'Barrack',
    lastName: 'Obama',
    termLength: '2',
    party: 'Democrat',
    yearsOfPresidency: '8 years'
};

var donaldTrump = {
    firstName: 'Donald',
    lastName: 'Trump',
    termLength: 'Current president',
    party: 'Republican',
    yearsOfPresidency: 'Currently in his first year'
};

var presidents = [georgeBush, billClinton, georgeWBush, barrackObama, donaldTrump];
console.log(presidents[2].firstName + presidents[2].lastName);

//Fuctions
//Function Declaration
function howdy(name, greeting) {
    return name + ' says ' + greeting;
}
var message = howdy('Efren Vasquez', 'hi!');
console.log(message);

//Fuction Expression
var numba = function (string) {
    if (string.length < 7) {
        return 'What a short little word!';
    } else if (string.length > 7) {
        return "I'm sorry, but that's too many to count.";
    } else {
        return '7, what a perfect choice!';
    }
};

console.log(numba('7'));
console.log(numba('seventy'));
console.log(numba('university'));

//Inception function
function inception(display, favMovie) {
    display(favMovie);
}

var display = function (favMovie) {
    console.log(favMovie + ' is a fantastic movie!');
};

inception(display, 'Star Wars');
