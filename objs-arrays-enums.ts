// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Maximilan",
//     age: 37,
//     hobbies: ['string', 'stringer'],
//     role: [1, 'one']
// };

enum Role{ADMIN = 0, USER = 1, MASTER};

const person = {
    name: "Maximilan",
    age: 37,
    hobbies: ['string', 'stringer'],
    role: Role.MASTER
};

console.log(person.name);
console.log(person.age);
for(const liker of person.hobbies)
{
    console.log(liker.toUpperCase());
}

if(person.role == Role.ADMIN)
{
    console.log("is admin");
}
else if(person.role == Role.MASTER)
{
    console.log("is master");
}
else if(person.role == Role.USER)
{
    console.log("is user");
}