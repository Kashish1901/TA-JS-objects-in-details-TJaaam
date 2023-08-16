//- Data:
  //- `title` (title of the question)
  //- `options` (array of options)
  //- `correctAnswerIndex` (index of the correct option)
//- Methods:
  //- `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  //- `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)


//let firstQuestion = new Question(
    //'Where is the capital of Jordan',
    //['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    //1
  //);
//let secondQuestion = new Question(
    //'Where is the capital of Jamaica',
    //['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    //2
  //);


//Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
let allMethods = {
    isAnswerCorrect : function(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer : function(){
        return this.options[this.correctAnswerIndex];
    },
}

function createQuestion(title , options , correctAnswerIndex){
    let question = Object.create(allMethods);
    question.title = title;
     question.options = options;
     question.correctAnswerIndex = correctAnswerIndex;
     return question;
}
//test
let firstQuestion =  createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );


//Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)


function CreateQuestion(title , options , correctAnswerIndex){
   this.title = title;
     this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}

CreateQuestion.prototype = {
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    },
}

let firstQuest = new CreateQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );

//Create using class
class Quest{
    constructor(title , options , correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}

let Question1 = new Quest(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);