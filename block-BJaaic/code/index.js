//#### Animal

//Properties:

//- `location`
//- `numberOfLegs`

//Methods

//- `eat()` - log a message saying `I live in ${location} and I can eat`

//- `changeLocation(newLocation)` - accepts location and updates the location of the animal

//- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`
let animalMethods = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation : function(newLocation){
       this.location = newLocation;
    },
    summary : function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}

function creatAnimals(location , numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

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
let dogMethods = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(name){
        this.name = name;
    },
    changeColor: function(color){
        this.color = color;
    },
    summary : function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    },

}

Object.setPrototypeOf(dogMethods , animalMethods);

function creatDog(name , color ,location , numberOfLegs){
    let animal = Object.create(dogMethods);
    animal.name = name;
    animal.color = color;2
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    
    return animal;
}

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

let catMethods = {
    meow: function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName : function(name){
        this.name = name;
    },
    changeColorOfEyes: function(color){
        this.colorOfEyes = color;
    },
    summary: function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
    },

}

Object.setPrototypeOf(catMethods, animalMethods);

function creatCat(name , color ,location , numberOfLegs , colorOfEyes){
    let animal = Object.create(catMethods);
    animal.name = name;
    animal.color = color;2
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}
