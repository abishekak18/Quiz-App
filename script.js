const ques = [
    {
        question: "Who won the Golden Boot in the 2018 FIFA World Cup?",
        answers: [
            { text: "Harry Kane", correct: true },
            { text: "Luka Modric", correct: false },
            { text: "Lionel Messi", correct: false },
            { text: "Cristiano Ronaldo", correct: false }
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Kyoto", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "Which programming language is primarily used for iOS app development?",
        answers: [
            { text: "Swift", correct: true },
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Great White Shark", correct: false }
        ]
    },
    {
        question: "What year did World War II end?",
        answers: [
            { text: "1945", correct: true },
            { text: "1939", correct: false },
            { text: "1918", correct: false },
            { text: "1941", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Oganesson", correct: false },
            { text: "Osmium", correct: false }
        ]
    },
    {
        question: "Who directed the movie 'Inception'?",
        answers: [
            { text: "James Cameron", correct: false },
            { text: "Steven Spielberg", correct: false },
            { text: "Christopher Nolan", correct: true },
            { text: "Quentin Tarantino", correct: false }
        ]
    },
    {
        question: "What is the largest continent by area?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "North America", correct: false },
            { text: "Europe", correct: false }
        ]
    }
];

const quesele = document.getElementById("question");
const answerbtn = document.getElementById("ansbtn");
const nxtbtn = document.getElementById("nextbtn");

let curr=0;
let score=0;

function start(){
    curr=0;
    score=0;
    nxtbtn.innerHTML="NEXT";
    showques();
}

function showques(){
    resetstate();
    let curq=ques[curr];
    let qno = curr+1;
    quesele.innerHTML=qno+". "+curq.question;

    curq.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}

function resetstate(){
    nxtbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectanswer(e){
    const selbtn = e.target;
    const iscorrect = selbtn.dataset.correct === "true";
    if(iscorrect){
        selbtn.classList.add("correct");
        score++;
    }else{
        selbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nxtbtn.style.display= "block";
}

function showscore(){
    resetstate();
    quesele.innerHTML = `You Scored ${score} out of ${ques.length}!!!`;
    nxtbtn.innerHTML = "Play Again";
    nxtbtn.style.display = "block";
}

function handlenext(){
    curr++;
    if(curr < ques.length){
        showques();
    }else{
        showscore();
    }
}

nxtbtn.addEventListener("click", ()=>{
    if(curr < ques.length){
        handlenext();
    }else{
        start();
    }
})

start();