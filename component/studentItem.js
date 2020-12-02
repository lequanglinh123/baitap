class StudentItem extends HTMLElement{
    constructor(){
        super();
        this._shadowDom = this.attachShadow({mode : 'open'})
        this.name = this.getAttribute('name')
        this.phone = this.getAttribute('class')
        this.age = this.getAttribute('age')
        this.address = this.getAttribute('address')
        this._shadowDom.innerHTML=`
            <div>${this.name}</div>
            <div>${this.phone}</div>
            <div>${this.age}</div>
            <div>${this.address}</div> `
    }
}
window.customElements.define("student-item", StudentItem)
