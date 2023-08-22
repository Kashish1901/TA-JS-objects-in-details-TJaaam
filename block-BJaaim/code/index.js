let form = document.querySelector("form");
let next = document.querySelector(".next");
let pre = document.querySelector(".pre")
let quizELm = document.querySelector(".quiz");
let totalQuestions = document.querySelector("header h2");
let showResult = document.querySelector(".show__result")

class Question{
    constructor(title , options , correctAnswer){
        this.title = title;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    isCorrect(answer){
        return this.options[this.correctAnswer] === answer;
    }
    getCorrectAnswer(){
        return options[this.correctAnswer];
    }
}



class Quiz{
    constructor(questions = [] , score = 0){
        this.questions =questions;
        this.score = score;
        this.activeIndex = 4;
    }
    nextQuestion(){
       this.activeIndex = this.activeIndex + 1;
       this.createUI();
    }
    previousQuestion(){
        this.activeIndex = this.activeIndex - 1;
        this.createUI();
    }
    handleButton(){
        if (this.activeIndex === 0){
            pre.style.visibility = "hidden";
        }else if (this.activeIndex === (this.questions.length - 1)){
            next.style.visibility = "hidden";
            showResult.style.visibility = "visible";
        }else{
            pre.style.visibility = "visible";
            next.style.visibility = "visible";
            showResult.style.visibility = "visible"
        }
    }
    updateScore(){
    this.score = this.score + 1;
    return this.score;
    }
    addQuestion(title , options , correctAnswer){
        let question = new Question(title , options , correctAnswer);
        this.questions.push(question);
    }
    createUI(){
    quizELm.innerHTML = "" ;
    let activeQuestions = this.questions[this.activeIndex];
    let form = document.createElement("form");
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    legend.innerText = activeQuestions.title;
    let optionElm = document.createElement("div");
    optionElm.classList.add("options");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");
    button.innerText = "submit"
    button.type = "Submit"
    buttonWrapper.append(button);

    activeQuestions.options.forEach((option , index) => {
    let input = document.createElement("input");
    let div = document.createElement("div");
    input.type= "radio";
    input.id = `option - ${index}`;
    input.name = "options";
    input.value = option;
    let label = document.createElement("label");
    label.for = `option - ${index}`;
    label.innerText = option;

    form.addEventListener("submit" , (event) => {
        event.preventDefault();
        if (input.checked){
            if(activeQuestions.isCorrect(input.value)){
                this.updateScore();
            }
        }
    })
    div.append(input , label);
    optionElm.append(div);
   })
   this.handleButton();
     totalQuestions.innerText =`Total Questions : ${this.questions.length}` ;
    fieldset.append(legend , optionElm , buttonWrapper);
    form.append(fieldset)
    quizELm.append(form);
    }
}

let quiz = new Quiz();
quizCollection.forEach((question) => {
    quiz.addQuestion(question.title , question.options , question.correctAnswer)
});
quiz.createUI();

next.addEventListener("click" , quiz.nextQuestion.bind(quiz));
pre.addEventListener("click" , quiz.previousQuestion.bind(quiz));

showResult.addEventListener("click" , () => {
    alert (`Your score is ${quiz.score}`);
})