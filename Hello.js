// console.log("Hello timtim");


// let a =10;
// console.log(a);

// a=15;
// console.log(a);

// a=13;

// console.log(a);


// var b=15;
// console.log(b);

// b=30;

// console.log(b);

// var b =14;
// console.log(b);


// console.log(a+b);

// console.log(newFunction(4, 6));

// function newFunction(a, b){
//     return a+b;
// }

// function callSuccess(){
//     console.log("Hi, timtim!");
//     proposeSuccess();
// }
// function proposeSuccess(){
//     console.log("Can you hear me? i Love you...");
//     replyTimtim();
// }

// function replyTimtim(){
//     console.log("NO! i hava a bf...");
// }

// // console.log(callSuccess());
// // console.log(proposeSuccess());
// // console.log(replyTimtim());

// console.log(callSuccess());

var constObject = [
{
    name: "Sajib",
    status: "Student"
},
{
    name: "Timtim",
    status: "BSc Student"
},
{
    name: "Roy"
},
{
    name: "Raj"
}

];

constObject.map((item, indx)=>{
    console.log(item);
});

const prices = [1000, 80000, 350, 5368, 3344];

var output = [];

prices.forEach((item) =>{
    // console.log(item*.5);
    output.push(item*.5);
}

);

// console.log(out)

const newPrices = prices.map((item)=>{
    return item*.5;
});

// console.log(newPrices);
