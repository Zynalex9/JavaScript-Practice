class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      return `${this.name} is studying hard in grade ${this.grade}.`;
    }
  }
  
  const student = new Student('Alice', 18, 12);
  console.log(student.greet()); 
  console.log(student.study());