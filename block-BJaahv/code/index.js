//## Requirements

//Create User (class/function) with the following properties.

//- [ ] properties (data):
  // - [ ] name
  // - [ ] id
  // - [ ] noOfProjects
//- [ ] methods:
  //- [ ] getProjects -> return number of project
  //- [ ] changeName -> accepts one parameter (newName)returns old user name
  //- [ ] incrementProject -> returns updated number of projects
  //- [ ] decrementProject -> returns updated number of projects

  //Using function to create object//

  function user(name , id , noOfProjects){
    let details = {};
    details.name = name;
    details.id = id;
    details.noOfProjects = noOfProjects;
    details.getProjects = function(){
        return this.noOfProjects;
    };
    details.changeName = function(newName){
        return this.name;
    };
    details.incrementProject = function(value = 1){
        this.noOfProjects = noOfProjects + value;
        return this.noOfProjects;
    };
    details.decrementProject = function(value = 1){
        this.noOfProjects = noOfProjects - value;
        return this.noOfProjects;
    };
    return details;
  }

  //test
  let firstUser = user("arya" , "@gmail.com" , 234);
  console.log(firstUser.changeName("John"));

//Using Object.create (prototypal pattern)//
let userMethods = {
    getProjects : function(){
        return this.noOfProjects;
    },
    changeName : function(newName){
        return this.name;
    },
    incrementProject : function(value = 1){
        this.noOfProjects = noOfProjects + value;
        return this.noOfProjects;
    },
    decrementProject : function(value =1){
        this.noOfProjects = noOfProjects - value;
        return this.noOfProjects;
    },
}

function userDetails(name , id , noOfProjects){
    let details = Object.create(userMethods);
    details.name = name;
    details.id = id;
    details.noOfProjects = noOfProjects;
    
    return details;
  }

//Using Pseudoclassical Way//
function User(name , id , noOfProjects){
    this.name = name;
    this.id = id;
   this.noOfProjects = noOfProjects;
  }

  User.prototype = {
    getProjects (){
        return this.noOfProjects;
    },
    changeName(newName){
        return this.name;
    },
    incrementProject(value =1){
        this.noOfProjects = noOfProjects + value;
        return this.noOfProjects;
    },
    decrementProject(value=1){
        this.noOfProjects = noOfProjects - value;
        return this.noOfProjects;
    },
  }

//test
let user3 = new User("john" , "john@23gmail" , 21)


//Using Class//
class Username{
    constructor(name , id , noOfProjects){
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    getProjects (){
        return this.noOfProjects;
    }
    changeName(newName){
        return this.name;
    }
    incrementProject(value =1){
        this.noOfProjects = noOfProjects + value;
        return this.noOfProjects;
    }
    decrementProject(value=1){
        this.noOfProjects = noOfProjects - value;
        return this.noOfProjects;
    }
}