class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hi, my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`
    );
  }

  calculateAgeAfterYears(years) {
    return this.age + years;
  }
}

const person1 = new Person("John", "Doe", 30);

person1.introduce();
console.log("Age after 5 years:", person1.calculateAgeAfterYears(5));

const greetPerson = (person) => {
  console.log(`Hello, ${person.firstName}!`);
};

greetPerson(person1);

// Using an arrow function as a member function (not recommended)
Person.prototype.greet = () => {
  console.log(`Greetings from ${this.firstName}!`);
};

person1.greet();
