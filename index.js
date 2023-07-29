let myname;
myname = 'hammad';
console.log(myname);
myname = null;
console.log(myname);
//myname = undefined // error
//myname = 12 // error
let myAge;
myAge = 34; // narrowing
console.log(myAge);
//console.log(myAge.toLowerCase()); // Error
myAge = "Dont Know";
console.log(myAge);
console.log(myAge.toString()); // common to both types can be called even without narrowing
console.log(myAge.toUpperCase()); // can be called on string because of narrowing
let newAge = Math.random() > 0.5 ? "Khan" : 60;
//newAge.toLowerCase(); // error: tanspiler can not narrow
if (newAge == "Khan") {
    // type of newAge : string
    newAge.toUpperCase(); // can be called
}
if (typeof newAge === "string") {
    newAge.toLowerCase(); //can be called
}
typeof newAge === "string"
    ? newAge.toUpperCase() //Ok string
    : newAge.toFixed(); // ok number
let age;
//age= "Hammad"// error
age = 95; //ok
age = "died"; //ok
age = 'unknown'; //ok
let hammad;
hammad = 'hammad';
//hammad = 'khan' //error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
if (yourName) {
    yourName.toUpperCase(); // Ok: string
}
//yourName.toUpperCase();//Error: Object is possibly 'undefined'.
yourName?.toUpperCase(); //OK
let data;
export {};
