class User{
    email : string;
    name : string;
    readonly city : string = "Karachi";
    constructor(email : string, name : string){
        this.email = email;
        this.name = name;
    }
}  

const khashif = new User ("example.com", "Khashif");    