class User {
    email: string;
    readonly name: string;
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const obj = new User("rashindra@gmail.com", "rashindra");
console.log(obj);