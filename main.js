// console.log('Hello Ji')
// console.warn('waah')
// console.error('Oye')

// Var, let, const

// let Age= 69;
// Age= 68;

// console.log(Age);

// string, numbers, boolean, null, undefined

const name='Abhijeet';
const age= 69;
const rating= 69.69;
const isCool = true;
// const x= null;
// const y= undefined;

// console.log(typeof x);

// 
// concatinate
// 

console.log('My name is ' + name + 'and my age is ' + age  +'')

const hey=(`My name is ${name} and I'm happy to meet yoyu all`);

console.log(hey)

console.log(hey.length)

console.log(hey.toUpperCase())

console.log(hey.substring(0, 20))

console.log(hey.substring(0, 20).toUpperCase())

console.log(hey.split(`, `))


// 
// Arrays - variables that holds multiple value
// 

const numbers= new Array(1,2,3,4,5);

console.log(numbers);

const fruits= ['apples',' orange', 'pine', 'drag'];

// fruits[4]= 69;
// fruits[5]= 'kiwi';

fruits.push('mango');
fruits.unshift('grape');

// fruits.pop(3);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('pine'));

console.log(fruits)

const person={
    firstName: 'Abhijeet',
    lastName: 'Dhaka',
    agee: 69,
    hobbies:['music', 'gym', 'gym'],
    address:{
        street: 'orchid Island',
        city: 'Gurgaon'
    }
}

// const{firstName, lastName}= person;

person.email= 'dhakaabhijeet@gmail.com';

console.log(person.email);

const todos=[
    {
        id:1,
        text: 'Take out the trash',
        isCompleted: true,
    },
    {
        id:2,
        text: 'Meeting',
        isCompleted: true,
    },
    {
        id:3,
        text: 'Doctor Appot',
        isCompleted: false,
    },
];

// console.log(todos[1].Text)
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// 
//  For & While
// 

for(let i=0; i<10; i++){
    console.log(`For loop number: ${i}`);
}

let i=0;
while(i<10){
    console.log(`While loop number: ${i}`)
    i++;
}

for(let todo of todos){
    console.log(todo.id)
}

// 
// forEach, Map, Filter

todos.forEach(function(todo){
    console.log(todo.text)
});

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted==true;
});

console.log(todoCompleted)

// 
// conditional

// const x=2;
// const y=19;

// if(x>10 && y>10){
//     console.log('x is 10');
// }
// else if(x>10){
//     console.log(`x is greater than 10`);
// }
// else{
//     console.log('x is less than 10');
// }

//  
// Ternary Operator

const x= 11;

const color= x>10 ? 'red' : 'blue';

console.log(color)