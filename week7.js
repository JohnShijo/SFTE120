// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }

//     text() {
//         console.log("Dog: " + this.dogName);
//         console.log("Weight: " + this.weight);
//         console.log("Color: " + this.color);
//         console.log("Breed: " + this.breed);
//     }

// }

// let dog = new Dog("Buddy", 45, "black", "Labrador");

// //console.log(dog.dogName + "is a" + dog.breed + "and weights" + dog.weight + "pounds.");

// dog.text();


class Student {
    constructor(firstName, lastName, dob, studentId, collegeName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.studentId = studentId;
        this.collegeName = collegeName;    
    }

    text() {
        console.log("Student: " + this.firstName + " " + this.lastName);
        console.log("Date of Birth: " + this.dob);
        console.log("Student ID: " + this.studentId);
        console.log("College Name: " + this.collegeName);
    }
}

let student = new Student("John", "Doe", "01/01/2000", "123456", "Harvard");

class Employees extends Student {
    constructor(firstName, lastName, dob, studentId, collegeName, employeeId, position, salary) {
        super(firstName, lastName, dob, studentId, collegeName);
        this.employeeId = employeeId;
        this.position = position;
        this.salary = salary;
    }

    text() {
        super.text();
        console.log("Employee ID: " + this.employeeId);
        console.log("Position: " + this.position);
        console.log("Salary: " + this.salary);
    }
}