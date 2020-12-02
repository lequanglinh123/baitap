import {Student} from './student.js'
export class StudentCollection{
    listStudent;    
    constructor(){
        this.listStudent = [];
    }
    addStudent(student){
        this.listStudent.push(student);
    }
    getStudentByAge(age){
        return this.listStudent.filter(student =>{
            return student.age === age
        })
    }
    getStudentByAgeAndAddress(age, address){
        return this.listStudent.filter(student =>{
            return student.age === age && student.address === address
        })
    }
    getStudentByName(name){
        return this.listStudent.filter(student =>{
            return student.name === name;
        })
    }  
}