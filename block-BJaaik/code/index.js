class Person{
    constructor(name , age , gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log(`One should eat healthy to stay healthy`);
    }
    sleep(){
    console.log(`Minimum of 8hrs sleep should be taken`)
    }
    walk(){
     console.log(`Early morning walk is conpulsory for everyone`);
    }
}

class Player extends Person{
    constructor(name , age , gender , sportsName){
        super(name , age , gender);
        this.sportsName = sportsName;
    }
    play(){
        console.log(`${this.name}  is a ${this.gender} player of ${this.sportsName}`)
    }
}

class Teacher extends Person{
    constructor(name , age , gender , institutions){
        super(name , age , gender);
        this.institutions = institutions;
    }
    teach(){
     console.log(`${this.name} is ${this.gender} teacher in ${this.institutions} institue.`)
    }
}

class Artist extends Person{
    constructor(name , age , gender , kind){
        super(name , age , gender);
        this.kind = kind;
    }
    createArt(){
     console.log(`${this.name} is ${this.gender} artist of ${this.kind} form.`)
    }
}

class Cricketer extends Player{
    constructor(name , age , gender , sportsName , teamName ){
        super(name , age , gender , sportsName);
        this.teamName = teamName;
    }
    playCricket(){
        console.log(`${this.name}  is a cricketer of ${this.teamName} team`)
    }
}
