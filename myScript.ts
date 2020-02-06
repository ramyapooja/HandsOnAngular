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


/*let mydata:any;
mydata="Hello"+" "+"welcome typescript";
console.log(mydata);
mydata=12+23;
console.log(mydata);
let mystring:string;
mystring="welcome to chennai";
console.log(mystring.slice(0,3));
let myNumber:number;
myNumber=100;
console.log(myNumber.toString()+" my result");*/


//let mysArray:string[];
//let mynArray:number[];

/*let mysArray:Array<string>;
let mynArray:Array<number>;
mysArray=["Hello","TypeScript"];
mynArray=[1,2,3,4];
console.log(mysArray);
console.log(mynArray);
console.log(mynArray[1]);
for(var n=0;n<mynArray.length;n++)
{
    console.log(mynArray[n]);
}
mysArray.forEach(function(value)
{
    console.log(value);
})*/


/*let myTuple:[number,string];
myTuple=[1,"ramya"];
console.log(myTuple);
let myVar:void;
myVar=undefined;
console.log(myVar);
let myVar1:null;
myVar1=null;
console.log(myVar1);
console.log(myTuple.pop());
myTuple.push(23);
console.log(myTuple);*/


/*enum myEnum{sunday=0,monday,tuesday,wednesday};
console.log(myEnum.tuesday);*/


//functions
/*function myFunction(num1:number,num2:number):number
{
    return(num1+num2);
}
console.log(myFunction(23,45));
function addfunction(num1:any,num2:any):any
{
    return(num1+num2);
}
console.log(addfunction("hi","TypeScript"));
function addnumber(num1:any,num2:any):number
{
    if(typeof(num1)=='string'&&typeof(num2)=='string')
    {
        let x:number;
        let y:number;
        x=parseInt(num1);
        y=parseInt(num2);
        return(x+y);
    }
    else
    return(num1+num2);
}
console.log(addnumber(12,23));
function getname(firstname:string,lastname:string):string
{
    if(lastname==undefined)
    return(firstname);
    else
    return(firstname+" "+lastname);
}
console.log(getname("ramya","vemuri"));*/


//interface with property alone
/*interface myInterface
{
    Name:string;
    Title:string;
}
function Ifunction(mydata:myInterface):string
{
    return(mydata.Name+" "+mydata.Title);
}
let dat={Name:"David",Title:"Associate"}
console.log(Ifunction(dat));*/



//class with constructor
/*class User
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("User created");
    }
}
let firstUser=new User(1,"Janu","janu@cts.com",21);
console.log(firstUser.Id+" "+firstUser.Name+" "+firstUser.Email+" "+firstUser.Age);
*/



//class with functions
/*class User
{
    private Id:number;
    private Name:string;
    private Email:string;
    private Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("User created");
    }

    register()
    {
        console.log(this.Name+"Successfully registered");
        console.log(firstUser.Id+" "+firstUser.Name+" "+firstUser.Email+" "+firstUser.Age);
    }
    getAge(id:number):number
    {
        if(this.Id==id)
            return this.Age;
        else
            return 0;
    }
}
let firstUser=new User(1,"Janu","janu@cts.com",21);
firstUser.register();
console.log(firstUser.getAge(1));*/



/*class User
{
    protected Id:number;
    protected Name:string;
    protected Email:string;
    protected Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("User created");
    }

    register()
    {
        console.log(this.Name+"Successfully registered");
        console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age);
    }
    getAge(id:number):number
    {
        if(this.Id==id)
            return this.Age;
        else
            return 0;
    }
}
class AdminUser extends User
{
    Type:string;
    constructor (id:number,name:string,email:string,age:number,type:string)
    {
        super(id,name,email,age);
        this.Type=type;
    }
    displayAdmin()
    {
        console.log("You are "+this.Type+" Admin");
        console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age+" "+this.Type);
    }
}
let cuser=new AdminUser(2,"sai","sai@cts.com",25,"Accounts");
cuser.displayAdmin();*/


interface IUser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    Register():void;
    getAge(id:number):number;

}
class User implements IUser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("User created");
    }
    Register()
    {
        console.log(this.Name+"Successfully registered");
        console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age);
    }
    getAge(id:number):number
    {
        if(this.Id==id)
            return this.Age;
        else
            return 0;
    }
}
let cuser=new User(2,"sai","sai@cts.com",25);
cuser.Register();
console.log(cuser.getAge(2));