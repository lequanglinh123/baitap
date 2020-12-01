import {Student} from './module/student.js';
import {StudentCollection} from './module/studentCollection.js';
import './component/studentItem.js'
import {getDataFromDoc, getDataFromDocs} from './untils.js'
const studentCollection = new StudentCollection;

async function  getOneData(){
    let res = await firebase.firestore().collection('User').doc('GjoQHHtoNHekDEbuqRt6').get();
    let user = getDataFromDoc(res)
    return user
}

async function getAllData(){
    let res = await firebase.firestore().collection('User').get();
    let users = getDataFromDocs(res);
    console.log(users);
}
getAllData().map(user => studentCollection.addStudent(new Student(user)));

// console.log(studentCollection);
