//Create a class and show data of two students

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

// objects
let s1 = new Student("Ali", 20);
let s2 = new Student("Ahmed", 22);

// calls
s1.show();
s2.show();