export class Student{
    className;
    fullName;
    age;
    address;
    id;
    construct(phone, fullName, age, address, id){
        this.id = id;
        this.phone = phone;
        this.fullName = fullName;
        this.age = age;
        this.address = address;
    }
    getInfo(){
        console.log(`Name:${this.fullName}
                    Class:${this.phone}
                    Age:${this.age}
                    Address:${this.address}
                    Id:${this.id}
        `)
    }
}
