let returnValue =[]
class Student{
    name;
    age;
    address;
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    showHTML(){
        document.getElementById("show").innerHTML += `
        <div class="info-container"
            <div class="name">${this.name}</div>
            <div class="age">${this.age}</div>
            <div class="address">${this.address}</div>
        </div>
        `
    }
}
class StudentList{
    listStudent;
    constructor(){
        this.listStudent = [];
    }
    addStudent(name,age,address){
        let student = new Student(name, age, address);
        this.listStudent.push(student);
        this.showAllStudents();
    }
    showAllStudents(){
        this.deleteHTMl();
        this.listStudent.forEach(student => student.showHTML());
    }
    show15YOStudents(){
        this.deleteHTMl();
        this.listStudent.filter((v) => {
           return v.age === 15;
        }).forEach(student => student.showHTML());
    }
    // show15YOStudents(){
    //     this.deleteHTMl();
    //     for(let i = 0; i < this.listStudent.length; i++){
    //         if(this.listStudent[i].age === 15){
    //             returnValue.push(this.listStudent[i]);
    //         }
    //     }
    //     returnValue.forEach(student => student.showHTML());
    //     returnValue=[];
    // } 
    show18YOStudents(){
        this.deleteHTMl();
        this.listStudent.filter((v) => {
            return v.age > 18 && v.address === "hn";
        }).forEach(student => student.showHTML());
    }
    // show18YOStudents(){
    //     this.deleteHTMl();
    //     for(let i = 0; i < this.listStudent.length; i++){
    //         if(this.listStudent[i].age === 18 && this.listStudent[i].address==="hn" ){
    //             returnValue.push(this.listStudent[i]);
    //         }
    //     }
    //     returnValue.forEach(student => student.showHTML());
    //     returnValue=[];
    // }
    findStudent(name){
        this.deleteHTMl();
        this.listStudent.filter((v) => {
            return v.name === name;
        }).forEach(student => student.showHTML());
    }
    // findStudent(name){
    //     this.deleteHTMl();
    //     for(let i = 0; i < this.listStudent.length; i++){
    //         if(this.listStudent[i].name === name){
    //             returnValue.push(this.listStudent[i]);
    //         }
    //     }
    //     returnValue.forEach(student => student.showHTML());
    //     returnValue=[];
    // }
    deleteEverything(){
        this.listStudent = [];
        this.deleteHTMl();
    }
    deleteHTMl(){
        document.getElementById("show").innerHTML="";
    }
}
const studentList = new StudentList();
document.querySelector(".addStudent").addEventListener("click", ( ) => {
    studentList.addStudent(document.querySelector("#name").value, parseInt(document.querySelector("#age").value), document.querySelector("#address").value);
})
document.querySelector(".showAll").addEventListener("click", ( ) => {
    studentList.showAllStudents();
})
document.querySelector(".show15YOStudents").addEventListener("click", ( ) => {
    studentList.show15YOStudents();
})
document.querySelector(".show18AndHN").addEventListener("click", ( ) => {
    studentList.show18YOStudents();
})
document.querySelector(".delete").addEventListener("click", ( ) => {
    studentList.deleteEverything();
})
document.querySelector(".find-name").addEventListener("click", function() {
    studentList.findStudent(document.querySelector("#search-name").value);
})