"use strict";//treat all js code as newer version
//alert(3+3) ham nodejs use kr rahe na ki browser isiliye error dega

console.log(3+3)


let name="hitesh";//its become string
//let age = 19 // it is int/number type
let isloggedin = true;//it is boolean;
let state;// it is undefined/null. 

console.log(typeof undefined);//type of undefined is undefined
console.log(typeof null);//but for null its object

let age =undefined
console.log(typeof age);

let value = Number(age)//string convert to int/number
console.log(typeof value);
//console.log(value);//if age=19abc it will give NAN means not a number
//console.log(value);//age=null it will give 0
//console.log(value);//age=undefined then NaN
//for boolean 0 and 1//

let isloogedin=1;
let bool=Boolean(isloogedin)
console.log(bool);
//for "" false
//"kk"=true;

let str = 33;
let change = String(str);
console.log(change);
console.log(typeof change);