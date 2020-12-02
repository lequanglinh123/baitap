import {Student} from './module/student.js';
import {StudentCollection} from './module/studentCollection.js';
import './component/studentItem.js'
import {getDataFromDoc, getDataFromDocs} from './untils.js'
const studentCollection = new StudentCollection;

async function  getOneData(){
    let res = await firebase.firestore().collection('User').doc('GjoQHHtoNHekDEbuqRt6').get();
    let user = getDataFromDoc(res)
    return user;
}
async function getAllData(){
    let res = await firebase.firestore().collection('User').get();
    let users = getDataFromDocs(res);
    // console.log(users.length);
    // for (const item of users) {
    //     studentCollection.addStudent(item);
    // }
    studentCollection.addStudent(users[0])
    studentCollection.addStudent(users[1])
    studentCollection.addStudent(users[2])
}
getAllData();
// listStudent is obj not an array????
let html = '';
for (const i of studentCollection.listStudent) {
    html+=`<student-item name="${i.name}" phone="${i.phone}" address="${i.address}" age="${i.age}"></student-item>`
}
console.log(html);
document.getElementById("app").innerHTML = html;
console.log(studentCollection.listStudent);