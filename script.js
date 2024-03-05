let time = 60;
var timerStart = document.querySelector("#button-start");


function timer() {
    
    const interval = setInterval(function(){
        document.getElementById("timer").innerHTML = time;
    time  = time -1
    if (time < 0 ) {
        clearInterval(interval);
    }
    }, 1000)
}

const questions = [
    {
        question: "Who Discovered Gravity",
        answers: {
          a: 'Thomas Edison',
          b: 'Albert Einstein',
          c: 'Isaac Newton',
          d: 'Stephen Hawking'
        },
        correctAnswer: 'c'
    },
    {
      question: "What Is The Capital of The USA",
      answers: {
        a: 'Washington D.C',
        b: 'Ottawa',
        c: 'Oslo',
        d: 'Wellington'
      },
      correctAnswer: 'a'
    },
    {
      question: "Who Has The Most Grammy Awards",
      answers: {
        a: 'Kanye West',
        b: 'Beyonce',
        c: 'Bruce Springsteen',
        d: 'Yo-Yo Ma'
      },
      correctAnswer: 'b'
    },
    {
      question: "How Fast Is A Cheetah",
      answers: {
        a: '20-40mph',
        b: '90-120mph',
        c: '50-80mph',
        d: 'All Of The Above'
      },
      correctAnswer: 'c'
    },
    {
      question: "How Big Is The Earth",
      answers: {
        a: '125,627 Miles',
        b: '10,989 Miles',
        c: '33,447 Miles',
        d: '24,901 Miles'
      },
      correctAnswer: 'd'
    },
];


function startQuiz() {
  document.getElementById("quiz-start").style.display = "none";
  document.getElementById("quiz-end").style.display = "none";
  document.getElementById("button-start").style.display = "none";
  firstQuestion();
  function writeQuestion(question) {
  
    console.log(question);
  }
  
  function startQuiz() {
   
    writeQuestion("Who Discovered Gravity?");
  }
  
  startQuiz();
  timerID = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  console.log('Timer Activated')

}

const writeQuestion=()=>{
    console.log("I can do this")

    
const nextQuestion=()=>{

    writeQuestion(somevar)
}
timerStart.addEventListener("click", timer); 
timerStart.addEventListener("click", startQuiz);
}
