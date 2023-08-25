function n(element){
    console.log(element);
}


// let a= 34;
// let b = 356;
// n(a);
// n(b);


// alert("do you know");
// let cb = confirm("what do you want");
// n(cb);
// let l = prompt("do you down","om");
// n(l);


// let a="om singhal"; 
// console.log(`hi! my name is ${a}`);
// let array = [628,2820,2121212173,28];



let array = {
  name : "om singhal",
  class : 32,
  age:20,
  fav_sub:"maths"

};


// array.forEach(function f(element) {
//     console.log(element);   
// });
// for(element of array){
//     console.log(element);
// }


for(element in array){
    console.log(`hi ${element} is ${array[element]}`)
}