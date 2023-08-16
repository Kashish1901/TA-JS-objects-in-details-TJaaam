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
        let oldName = details.name;
        details.name = newName;
        return oldName;
    };
    details.incrementProject = function(){
        details.noOfProjects += 1;
        return details.noOfProjects;
    };
    details.decrementProject = function(){
        details.noOfProjects -= 1 ;
        return details.noOfProjects;
    };
    return details;
  }

  //test
  let Arya = user("arya" , "@gmail.com" , 234);
  console.group("Arya")
  console.log(Arya.name);
  console.log(Arya.incrementProject());
  console.log(Arya.decrementProject());
  console.log(Arya.changeName("John"));
  console.log(Arya.name);
  console.groupEnd();

//Using Object.create (prototypal pattern)//
let userMethods = {
    getProjects : function(){
        return this.noOfProjects;
    },
    changeName : function(newName){
        let oldName = this.name;
        this.name = newName;
        return oldName;
      
    },
    incrementProject : function(){
        this.noOfProjects += 1 ;
        return this.noOfProjects;
    },
    decrementProject : function(){
        this.noOfProjects -= 1;
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
 //test
 let John = userDetails("John" , "@gmail.com" , 220);
 console.group("John")
 console.log(John.name);
 console.log(John.incrementProject());
 console.log(John.decrementProject());
 console.log(John.changeName("stark"));
 console.log(John.name);
 console.groupEnd();


//Using Pseudoclassical Way//
function UserObj(name , id , noOfProjects){
    this.name = name;
    this.id = id;
   this.noOfProjects = noOfProjects;
  }

  UserObj.prototype = {
    getProjects (){
        return this.noOfProjects;
    },
    changeName(newName){
        let oldName = this.name;
        this.name = newName;
        return oldName;
    },
    incrementProject( ){
        this.noOfProjects += 1 ;
        return this.noOfProjects;
    },
    decrementProject(){
        this.noOfProjects -= 1;
        return this.noOfProjects;
    },
  }

//test
let user3 = new UserObj("john" , "john@23gmail" , 21)


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
        let oldName = this.name;
      this.name = newName;
        return oldName;
    }
    incrementProject(){
        this.noOfProjects += 1;
        return this.noOfProjects;
    }
    decrementProject(){
        this.noOfProjects -= 1 ;
        return this.noOfProjects;
    }
}