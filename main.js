console.log('hello world');

//  let, const
let age = 33;
 
console.log(age);

// String, numbers, Boolean, null, undefined, symbols

const name = 'Stan';
const ager = 21;
const rating = 4.5;
const iscool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);
 //concatenation
 console.log('My name is ' + name +' and Iam '+ age)
 //Template String
 console.log(`My name is ${name} and I am ${ager}`);

 //arrays

 const num = new Array(1,2,3,4,5);
 console.log(num)

 const fruits =['apples', 'oranges', 'pears', 10];
 fruits[3]='grapes';
fruits.push('Mangos');
fruits.unshift('strawberries');
fruits.pop();
 console.log(fruits)

 ///////
 const person = {
     firstname: 'stan',
     lastname: 'Njoroge',
     age: 30,
     hobbies: ['music', 'movies', 'sports'],
     address: {
         street: '50 main st',
         city: 'Boston',
         state: 'MA'
     }
 }
person.email = 'stan643@gmail';
 console.log(person);

 const todos = [
     {
         id: 1,
         text: 'Take out trash',
         isComplete: true

     },
     {
        id: 2,
        text: 'Meeting Boss',
        isComplete: true

    },
    {
        id: 3,
        text: 'Dentist appt',
        isComplete: true

    }
 ];
 console.log(todos[1]);

//const todoJSON =JSON.stringify(todos);
 //console.log(todoJSON);


 //FOR LOOP
 for(let i = 0; i<10; i++){
     console.log(i);
 }

 //while loop
 let i=0;
 while (i<10) {
    console.log(`while loop: ${i}`);
    i++;
 }

 //for loop of an array
 for(let i = 0; i<todos.length; i++){
    console.log(i);
 }

 //for(let tod of todos){ 
   //  console.log(todo.id)
 //}

 //for Each, map, filter
 todos.forEach(function(todo){
     console.log(todo.text);
 });

 //conditions
 const za = 10;
 if(za===10){
     console.log('za is 10');
 }
 else if(za>10){
     console.log('za is greater than 10');
 }
 else{
     console.log('za is less than 10');
 }
//ternally operator
const color = za >10? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
}

 //functions
 function addNums(num1, num2) {
     return num1 + num2;
 }    
 console.log(addNums(5,5));
//or
const addnum = (num3=1 , num4= 1) => num3 +num4;
console.log(addnum());
 //oop
 function Person(fname, lname, dob){
     this.fname = fname;
     this.lname = lname;
     this.dob =new Date(dob);
     this.getFullName = function(){  ///wrong way
         return `${this.fname} ${this.lname}`;
     }

 }
 Person.prototype.getBirthYear = function(){  ///best way
     return this.dob.getFullYear();
 }
 const Person1 = new Person('Stan', 'Mahihu','09-01-2000');
 const Person2 = new Person('RoseMary', 'Njoki','05-01-2005');
 const Person3 = new Person('Mike', 'Gathuka','01-06-2009');
 console.log(Person1);
 console.log(Person2.fname);
 console.log(Person3.getFullName());
 console.log(Person2.getBirthYear());

 //class
 //class Student{
   // fname = fname;
    //lname = lname;
    //dob =new Date(dob);
 //} 
 alert('hello');
 
 