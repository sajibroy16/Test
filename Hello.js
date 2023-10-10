// // console.log("Hello timtim");


// // let a =10;
// // console.log(a);

// // a=15;
// // console.log(a);

// // a=13;

// // console.log(a);


// // var b=15;
// // console.log(b);

// // b=30;

// // console.log(b);

// // var b =14;
// // console.log(b);


// // console.log(a+b);

// // console.log(newFunction(4, 6));

// // function newFunction(a, b){
// //     return a+b;
// // }

// // function callSuccess(){
// //     console.log("Hi, timtim!");
// //     proposeSuccess();
// // }
// // function proposeSuccess(){
// //     console.log("Can you hear me? i Love you...");
// //     replyTimtim();
// // }

// // function replyTimtim(){
// //     console.log("NO! i hava a bf...");
// // }

// // // console.log(callSuccess());
// // // console.log(proposeSuccess());
// // // console.log(replyTimtim());

// // console.log(callSuccess());

// var constObject = [
// {
//     name: "Sajib",
//     status: "Student"
// },
// {
//     name: "Timtim",
//     status: "BSc Student"
// },
// {
//     name: "Roy"
// },
// {
//     name: "Raj"
// }

// ];

// constObject.map((item, indx)=>{
//     // console.log(item);
// });

// const prices = [1000, 80000, 350, 5368, 3344];

// var output = [];

// prices.forEach((item) =>{
//     // console.log(item*.5);
//     // output.push(item*.5);
// }

// );

// // console.log(out)

// const newPrices = prices.map((item)=>{
//     return item*.5;
// });

// // console.log(newPrices);


// // alert("this code just practice....")

// console.log(`Hello world`);


// const naame = "Sajib Ray Raj";

// console.log(naame.indexOf("Raj"));

// // console.log(naame.split("a"));

// // console.log(naame[0]);
// // console.log(naame.charAt(2));
// // const newNaame;
// for(let i=0; i<naame.length; i+=3){
//     const newNaame = naame.slice(i, i+3);
//     // console.log(newNaame);

// }

// console.log(naame.replace(1, 3));
// // console.log(newNaame);

// const outer = "He is a good boy \\roy\\ but not a tall";
// // console.log(outer);

// const first = "Sajib";
// const second = "Roy";

// console.log(first.concat(" "+second));

// const word = 10;
// // console.log(typeof(word.toString()));
// // console.log(typeof(word));


// let a = 5.266;
// let b = 3.1416;

// console.log(`${(a*b).toFixed(4)}`);

// // let userInput = prompt("Guess a number!");

// // console.log(userInput);

// let n = 10;
// let sum=0;
// while(n>0){
//     console.log(n);
//     sum += n;
//     n--;
// }

// console.log(sum);


// const d = new Date();

// console.log(d);

// const Toolean = true;
// console.log(typeof Toolean);
// let x=5;
// const num = new Boolean(x);
// console.log(typeof num)



const hello = function(){
    // console.log("Hello World!");
}
hello();

const demo = function(){
    return "Hello World!";
}
// console.log(demo());

const demo1 = (a, b) => {
    
    console.log("Finally Result print");
    console.log(a+b);
    // return;
    // return a+b;
}
// console.log(demo1(4, 5));

// function hel(){
//     console.log("Hello World!");
// }
const hel = () =>{
    console.log("Hello timtim");
}
hel();

class Car{
    // let name;
    // let year;
    // constructor(na, ye){
    //     this.name = na;
    //     this.year = ye;
    // }
    printLove(){
        // console.log("timtim");
        return "timtim";
    }
    sumTwoNumber(a, b){
        console.log(a+b);
    }
}

const car1 = new Car("BMW", 2018);
// console.log("Car name: " +car1.name+"\n"+ "Model year: "+car1.year);
// const car1 = new Car();
// car1.sumTwoNumber(3, 5);
// console.log("I Love this lady"+ car1.printLove());
// console.log(car1.printLove());


const obj = {
    name: "timtim",
    color: "Red",
    hobby: "Reading",
    age: 22,
    arr: [1, 3, 4, 5, 65, 5]
}
console.log(obj);
obj.gender = "Female";
console.log(obj);
obj.name = "Love timtim";
console.log(obj);
console.log(obj.arr);

console.log(obj.arr.length);

const person = {
  name: "John",
  age: 30,
  city: "New York",
  house: 23+"A"
};
console.log(person);