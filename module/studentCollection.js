import {Student} from './studentCollection'
export class StudentCollection{
    listStudent;
    construct(){
        this.listStudent = []
    }
    addStudent(student){
        if(student instanceof Student){
            this.listStudent.push(student)
        }
        else{
            alert('nhap sai')
        }
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
            return student.name === name
        })
    }
    
}