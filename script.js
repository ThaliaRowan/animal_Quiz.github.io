var cardTitle = document.querySelector("#cardTitle");
var question = document.querySelector("#question");
var btn = document.querySelector("#btn");
var opt = document.querySelector("#options");
var anBtn = document.querySelector(".anBtn");
var result = document.querySelector("#result");
var time = document.querySelector("#time");
var quiz = document.querySelector('#quizBod');
var inBtn = document.querySelector('#inBtns')
var scoreBud = document.querySelector('#scoreBod');
var scoreMod = document.querySelector('#scoreMod');
var gameOver = document.querySelector('.gameOver');
var goBack = document.querySelector('#goback')
var high = document.querySelector('#high');
var idx;
var myButn;
var opIdx;
var que;
var outS;
var scores;
var counter = 0;
var score = 0;
var objArr = [];
var ansArr = [];
var secondsLeft = 30;

function myObj() {
  for (let i = 0; i < options.length; i++) {
    objArr.push(options[i]);
  }
  return objArr;
}

function myQuestion() {
  idx = 0;
  que = objArr[idx];
  question.innerHTML = que.question;

  var cQuest = objArr.indexOf(que);
  objArr.splice(cQuest, 1);

  var answers = que.answer.length;

  for (let i = 0; i < answers; i++) {
    ansArr.push(i);
  }
  opt.innerHTML = "";
  for (let i = 0; i < answers; i++) {
    var optIdx = ansArr[idx];

    var cAns = ansArr.indexOf(optIdx);
    ansArr.splice(cAns, 1);
    console.log(ansArr);

    var sect = document.createElement("div");
    myButn = document.createElement("button");
    myButn.classList.add("anBtn");
    myButn.id = optIdx;
    myButn.setAttribute("type", "button");
    myButn.setAttribute("onclick", "checkAnswer(this)");
    myButn.innerHTML = que.answer[optIdx];
    sect.appendChild(myButn);
    opt.appendChild(sect);
  }

  counter++;
  moving();
  
 

}



function myTimer() {
  var theInterval = setInterval(() => {
    secondsLeft--;
    time.textContent = "Time: " + secondsLeft;
  if(secondsLeft === 0){
    clearInterval(theInterval);
    quiz.style.display = 'none';
    high.style.display = 'block';
  }
  }, 1000);

};

function checkAnswer(element) {
  var id = parseInt(element.id);
  if (id === que.rightAns) {
    result.innerHTML = "Correct!";
    score += 5;

    myObj();
    myQuestion();
  } else {
    result.innerHTML = "wrong!";
    secondsLeft = secondsLeft - 10;
    console.log("nah");

    myObj();
    myQuestion();
  }
}


 
function moving(){ 
  if(counter === 5){
    quiz.style.display = 'none';
    gameOver.style.display = 'block';

  }

  
}

function goingBack(){
  high.style.display = 'none';
document.querySelector('#question').style.display = 'block';
}



function btnClick() {
  btn.classList.add("hide");
  result.style.display = 'block'
  myTimer();
  myObj();
  myQuestion();
}

  


var options = [
  {
    question: "What sound do cats make?",
    answer: ["Moo", "Meow", "Woof", "Neigh"],
    rightAns: 1,
  },

  {
    question: "Are dogs mamals?",
    answer: ["yes", "no"],
    rightAns: 0,
  },
  {
    question: "A group of birds are called...",
    answer: ["A flock", "A pride", "A jet", "An aeroplane"],
    rightAns: 0,
  },
  {
    question: "Which bird can fly backwards?",
    answer: ["A penguin", "A hummingbird", "A crow", "A parrot"],
    rightAns: 1,
  },
];




btn.addEventListener("click", btnClick);
goBack.addEventListener('click', goingBack)
document.querySelector('#inBtns').addEventListener('click', function(event){
  event.preventDefault();
  gameOver.style.display= 'none';  
  high.style.display = 'block';
  var initial = document.querySelector('#initials').value;
  var user= document.createElement('div');

  user.innerHTML = initial + ':' + ' ' + score;
  scores = user.innerHTML;
  scoreBud.appendChild(user);

  var nums = initial + ':' + ' ' + score;
  window.onbeforeunload = function() {
      localStorage.setItem('nums', nums);
  
  }
  
  
  window.onload = function() {
  
      var name = localStorage.getItem('nums');
      if (name !== null);
      scoreMod.innerHTML = name;
  }
  
  
 }) 