//"use strict"// treat all js code as newer version
// alert(3+3)// we are using nodejs, not browers
//console.table([accid,name,add])//print all variable vale in 
//console.log(3+3);// avoid put semicolom
// number,string,bigInt,boolean=true/false
//null=standalone value
//undefined= when  you have not defind or assign any value to any variable
//symbol= unique
// object
// type of() null=>object. undefined=> undefined
let score="33abc"
console.log(typeof(score))
let againvalue=Number(score)
console.log(typeof(againvalue))//Number
console.log(againvalue)//NaN(not a number)
//NaN ->which  not be converted into number
let login=1
let boolenlog=Boolean(login)
//""->false, "apurva"->true
//*operators */
console.log("1" + 2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"3")//33
/**comparison */
console.log("2">1)//true
console.log("02">1)//true
console.log(null>1)//false->equality == operator and comparison operator works differently in js (js contvert null to 0 in comparison)
console.log(null>=0)// true
/**Data type in js */
//primitve-> copy will be pass(call by value)--> string,Number,Boolean,null,undefine,BigInt,Symbol
// reference--> Array, Function, Objects(call by reference)
let id=Symbol("123")
let anotherid=Symbol("123")
console.log(id==anotherid)//false
let arr=["ll","22","66"];
let obj={key:"value"};
const fun= 
function(){
    console.log("hii");
};//type of fun will be funtion
// define funtion keyword
//-----------------String------------//
let name="Apurva"
console.log(`my name is  ${name}`);
const name2=new String("apurva")// it will be treated as object.
console.log(name2[0])// we can acess the each index value
console.log(name2.__proto__)// tell the string is object
//---methods are same as java----//
console.log(name.length)// charAt,toUpperCase,toString,subString(0,5)(5 index will not be inclued)
console.log(name.slice(-4,2))// in slice we can give negetive value
console.log(name.trim())// remove starting space and last space
console.log(replace("40",'-'))// replace the 40 with -
//includes-->true/false
//split()-->hitesh-hc-chai-with-code-->give a array->[hitesh,hc,chai]









