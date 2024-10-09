let cat = { name: "lucy", color: "golden brown", age: "3" };
let dog = new Object();
dog.breed= "husky";
dog.name= "jacky";
dog.isVaccinated = true;
// console.log(dog);
document.getElementById("paral").innerHTML = "breed: " + dog.breed + "<br>name: " + dog["name"] + "<br>isVaccinated: " + dog.isVaccinated;
console.log(dog);
delete dog.isVaccinated;
console.log(dog);
dog.age = 5;
console.log(dog);

const person = {
    fname: "Sonam",
    lname: "Pelden",
    age: 20,
    fullname: function fullname () {
        return this.fname + " " + this.lname
    }
};
console.log(person);
document.getElementById("paral").innerHTML = person.fullname();

let x = 5;
let y = "5";
document.getElementById("paral").innerHTML = x + y;