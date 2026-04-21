// function in js

function add(a,b){
    return a+b;
}

console.log('The sum is:', add(2,3));

// function expression

const sub = function(a,b){
    return a-b;
};

console.log('The difference is:', sub(5,3));


function addsub(a,b){
   let sum = add(a,b);
    let diff = sub(a,b);

    return ' ' + sum + ' ,' + diff;
}

console.log('The sum and difference are:', addsub(2,3));
// arrow function

const name = (fname,lname) =>{
    let full_name = fname+' '+lname
    return full_name
}
console.log(name('pragyan','pandey'));

// Template literals
const fname = 'pragyan';
const greeting = `Hello, ${fname}!`;
console.log(greeting);