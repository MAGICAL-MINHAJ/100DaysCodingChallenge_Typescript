interface Student {
    name: string;
    age: number;
    classes: string[];
}

// Example student
const exampleStudent: Student = {
    name: "Donald Trump",
    age: 25,
    classes: ["Mathematics", "Physics", "English"]
};

// Displaying student information
console.log("Student Name:", exampleStudent.name);
console.log("Age:", exampleStudent.age);
console.log("Classes:", exampleStudent.classes.join(", "));
