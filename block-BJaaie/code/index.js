                    //Pseudoclassical Pattern//
//#### Animal
//Properties:
//- `location`
// `numberOfLegs`
//Methods
//- `eat()` - log a message saying `I live in ${location} and I can eat`
//- `changeLocation(newLocation)` - accepts location and updates the location of the animal
//- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

function CreateAnimal(location , numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}
CreateAnimal.prototype ={
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function(newLocation){
       this.location = newLocation;
       return this.location;
    },
    summary : function(){
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
    }
}

let rat = new CreateAnimal("brazil" , 4);
//#### Dog
//It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.
//Properties:
//- `name`
//- `color`
//Methods:
//- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
//- `changeName(newName)` - accepts the name property and updates the name of the dog
//- `changeColor(newColor)` - accepts the new color and updates the color of the dog
//- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`
function CreateDog(location , numberOfLegs , name , color){
    CreateAnimal.apply(this , [location , numberOfLegs]);
    this.name = name;
    this.color = color;
};
CreateDog.prototype = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColor: function(newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){
        console.log(`I am ${this.name} and I am of ${this.color} color. I can also bark`);
    }
}

Object.setPrototypeOf(CreateDog.prototype , CreateAnimal.prototype);

let cat = new CreatDog("haryana" , 8 , "meow" , "brown");
//#### Cat
//It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.
//Properties:
//- `name`
//- `colorOfEyes`
//Methods:
//- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`
//- `changeName(newName)` - accepts the name property and updates the name of the dog
//- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog
//- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
function CreateCat(location , numberOfLegs , name , colorOfEyes){
    CreateAnimal.apply(this , [location , numberOfLegs]);
    this.name = name;
   this.colorOfEyes = colorOfEyes;
};
CreateCat.prototype = {
    meow: function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor){
        this.colorOfEyes = newColor;
        return this.color;
    },
    summary: function(){
        console.log(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`);
    }
}

Object.setPrototypeOf(CreateCat.prototype , CreateAnimal.prototype);

                         //Class Pattern//
class Animal{
    constructor(location , numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation){
       this.location = newLocation;
       return this.location;
    }
    summary(){
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`);
    }
};

class Dog extends Animal{
    constructor(location , numberOfLegs , name , color){
        super(location , numberOfLegs );
        this.name = name ;
        this.color = color;
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`);
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColor(newColor){
        this.color = newColor;
        return this.color;
    }
    summary(){
        console.log(`I am ${this.name} and I am of ${this.color} color. I can also bark`);
    }
};

class Cat extends Animal{
    constructor(location , numberOfLegs , name , colorOfEyes){
        super(location , numberOfLegs );
        this.name = name ;
        this.colorOfEyes = colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
        return this.color;
    }
    summary(){
        console.log(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`);
    }
}