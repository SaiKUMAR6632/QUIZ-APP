const quizData=[
{
    question:"Against which team Virat Kohli scored 183 ",
    a:"Australia",
    b:"pakisthan",
    c:"England",
    d:"west indies",
    correct_answer:"b",
},
{
    question:"For which team Surya kumar Yadav was playing before coming into MI",
    a:"KKR",
    b:"CSK",
    c:"RR",
    d:"SRH",
    correct_answer:"a",
},
{
    question:"what was the career highest score for rohit sharma",
    a:"217",
    b:"254",
    c:"264",
    d:"228",
    correct_answer:"c",
},
{
    question:"Who Captained England in the 2019 WorldCup",
    a:"Joe Root",
    b:"Morgan",
    c:"Ben Stokes",
    d:"Jos Buttler",
    correct_answer:"b",
},
{
    question:"What was the Score of CSK in the opening match of IPL against GT",
    a:"178",
    b:"179",
    c:"187",
    d:"180",
    correct_answer:"a",
}
];
const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionE1=document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const buttonEl=document.getElementById("submit");

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData);
    questionE1.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

}
function getSelected(){
    let answer=undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
    });
}
buttonEl.addEventListener("click",()=>{
    const answer=getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct_answer)
        {
            score++;
        }
    currentQuiz++;
    if(currentQuiz<quizData.length)
    {
        loadQuiz();
    }
    else{
        quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions.<\h2> <button onclick="location.reload()">Reload</button>`;
    }
}
});