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
