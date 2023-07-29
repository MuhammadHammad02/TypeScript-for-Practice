// nested object 

type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Hammad",
        lastName: "Khan"
    },
    
        name: "My Best Book"
    

}