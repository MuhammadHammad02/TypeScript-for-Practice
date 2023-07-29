let myname: unknown = "Hammad";
console.log((myname as string).length);
console.log((<string> myname).length)