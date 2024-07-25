export  function sum(a,b) {
    console.log(a+b);
    return "return";
}


export  const person = { 
    name:"kamran",
    age:23,
    department:"computer Science",
    meth:()=>{
        console.log(`My name is ${person.name} and i am ${person.age} years old currently pursing degree in ${person.department}`);
    }
}