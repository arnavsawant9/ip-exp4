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
  

// here the student extends person
  class Student extends Person {
    constructor(firstName, lastName, age, rollNo) {
      super(firstName, lastName, age);
      this.rollNo = rollNo;
  
      if (rollNo <= 0) {
        throw new Error("Roll number must be greater than 0.");
      }
    }
  
    // Overriding the introduce method
    introduce() {
      super.introduce();
      console.log(`My roll number is ${this.rollNo}.`);
    }
  
    // Additional method for students
    getGrade() {
      // Implement logic to calculate the grade based on student's performance
      return "A";
    }
  }
  
  // Creating a student object
  const student1 = new Student("Alice", "Smith", 20, 12345);
  
  // Calling methods
  student1.introduce();
  console.log("Grade:", student1.getGrade());
  
  // Handling potential exceptions
  try {
    const invalidStudent = new Student("Bob", "Johnson", 25, 0);
  } catch (error) {
    console.error(error.message);
  }