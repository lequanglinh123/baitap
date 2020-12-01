import {Student} from './module/student.js';
import {StudentCollection} from './module/studentCollection.js';
import './component/studentItem.js'
import {getDataFromDoc, getDataFromDocs, getStudentsFromData} from './untils.js'
const studentCollection = new StudentCollection;

async function  getOneData(){
    let res = await firebase.firestore().collection('User').doc('GjoQHHtoNHekDEbuqRt6').get();
    let user = getDataFromDoc(res)
    return user;
}

async function getAllData(){
    let res = await firebase.firestore().collection('User').get();
    let users = getDataFromDocs(res);
    users.map(data =>{
        let student = getStudentsFromData(data);
        StudentCollection.listStudent.push(student);
    })
}
getAllData();
let html =``;
for(const iteration of studentCollection.listStudent){
    html+=`<student-item name="${iteration.name}" phone="${iteration.phone}" age="${iteration.age}" address="${iteration.address}"></student-item>`
}
document.getElementById("app").innerHTML=html;
// console.log(studentCollection);
