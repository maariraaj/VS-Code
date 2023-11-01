class Person {
    constructor(first_name, last_name, date_of_birth, email, phone_number) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.email = email;
        this.phone_number = phone_number;
    }
    getFullName() {
        return `${this.first_name}${this.last_name}`;
    }
    getAge() {
        const today = new Date();
        const dob = new Date(this.date_of_birth);
        const age = today.getFullYear() - dob.getFullYear();
        if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }
    toString() {
        return `Name: ${this.getFullName()}\nDate of Birth: ${this.date_of_birth}\nEmail: ${this.email}\nPhone Number: ${this.phone_number}\nAge: ${person.getAge()}`;
    }
}
const dob = new Date(1995, 5, 28); 
const person = new Person("Prabha", "Yazhini", dob, "yazhini28@hotmail.com", "9488236081");
console.log(person.toString());