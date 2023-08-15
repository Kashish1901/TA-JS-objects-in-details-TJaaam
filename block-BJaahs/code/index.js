// Data
//- `title` (title of the question)
//- `options` (array of options)
//- `correctAnswerIndex` (index of the correct option)
//Methods:
//- `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//- `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)


//Without Object
//Organize using object
//Use a function to create object
//Convert the function to use `this` keyword
//Write test by creating two objects also test both methods.

//const testData = {
//title: 'Where is the capital of Jordan',
//options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//correctAnswerIndex: 1,
//};


let title = "Where is the capital of Jordan";
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex= 1;

function isAnswerCorrect(index){
    return index === correctAnswerIndex;
};

function getCorrectAnswer(){
    return options[correctAnswerIndex];
};

//Using object

let question = {
    title: "Where is the capital of Jordan",
    options : ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex:  1,
    isAnswerCorrect(index){
        return index === question.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return question.options[question.correctAnswerIndex];
    }
}

//Use a function to create object
function createQuestion(title , options , correctAnswerIndex){
    let question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function(index){
        return index === this.correctAnswerIndex;
    };
    question.getCorrectAnswer = function(){
        return this.options[this.correctAnswerIndex];
    };
    return question;
}

const firstQuestion = createQuestion(
    "Where is the capital of Jordan" ,
     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
     1);