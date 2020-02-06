/*console.log("Hello from typescript");
let mystring:string;
let myNumber:number;
let myStatus:boolean;
mystring="TypeScript"
myNumber=120;
myStatus=true;
console.log(mystring);
console.log(myNumber);
console.log(myStatus);*/
var User = /** @class */ (function () {
    function User(id, name, email, age) {
        this.Id = id;
        this.Name = name;
        this.Email = email;
        this.Age = age;
        console.log("User created");
    }
    User.prototype.Register = function () {
        console.log(this.Name + "Successfully registered");
        console.log(this.Id + " " + this.Name + " " + this.Email + " " + this.Age);
    };
    User.prototype.getAge = function (id) {
        if (this.Id == id)
            return this.Age;
        else
            return 0;
    };
    return User;
}());
var cuser = new User(2, "sai", "sai@cts.com", 25);
cuser.Register();
console.log(cuser.getAge(2));
