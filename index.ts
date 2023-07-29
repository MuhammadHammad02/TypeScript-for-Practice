function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName)

var buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}
var myFriends = buildNameFun("Ahmed", "Jahanzaib","Qasim", "Majid","Ahmed", "Mujeeb") 

console.log(myFriends)