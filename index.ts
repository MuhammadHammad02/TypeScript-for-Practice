// Object Aliased

// anonymous

let teacher :{name: string, experience:number }={
    name:'Qasim',
    experience: 10

}

// Aliased Type Object

type Student = {
    name: string,
    age: number
}

let student: Student={
    name: "Umair",
    age : 34
}

console.log(student["name"])
console.log(student.age)

// Interface

interface Manager {
    name: string,
    age?: number
}

let myManager: Manager= {
    name: "Jibran",
    age: 43
}

let myEmployee : Manager={
    name: "Kashif"
}