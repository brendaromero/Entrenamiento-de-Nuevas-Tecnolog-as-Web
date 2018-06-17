var name: string = "Gabriela";
var num: number = 15;
var myArr: Array<number> = [1, 2, 3];

var something: any = 15;
something = "hello";

function sample(first: string): string {
    return first
}


class Person{
    constructor(public name:string) {
        
    }
}


var pPerson: Person = new Person("PersonName");


//Example converted

ar name = "Gabriela";
var num = 15;
var myArr = [1, 2, 3];
var something = 15;
something = "hello";
function sample(first) {
    return first;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var pPerson = new Person("PersonName");
