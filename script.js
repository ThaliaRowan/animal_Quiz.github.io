var cardTitle = document.querySelector("#cardTitle");
var question = document.querySelector("#question");
var btn = document.querySelector("#btn");
var opt = document.querySelector("#options");
var anBtn = document.getElementsByClassName("anBtn");
var time = document.querySelector('#time');
var idx;
var opIdx;
var counter = 0;
var objArr = [];
var ansArr = [];
var secondsLeft = 90; 

function myObj() {
  for (let i = 0; i < options.length; i++) {
    objArr.push(options[i]);
  }
  return objArr;
}

function myQuestion() {
  idx = 0;
  var que = objArr[idx];
  question.innerHTML = que.question;

  var cQuest = objArr.indexOf(que);
  objArr.splice(cQuest, 1);

  var answers = que.answer.length;

  for (let i = 0; i < answers; i++) {
    ansArr.push(i);
  }
   opt.innerHTML = '';
  for (let i = 0; i < answers; i++) {
    //opIdx = 0;
    var optIdx = ansArr[idx];

    var cAns = ansArr.indexOf(optIdx);
    ansArr.splice(cAns, 1);
    console.log(ansArr);

    var sect = document.createElement("div");
    var myButn = document.createElement("button");
    myButn.classList.add('anBtn')
    myButn.innerHTML = que.answer[i];
    sect.appendChild(myButn);
    opt.appendChild(sect);
  }

  counter++;
}


function myTimer(){
    var theInterval = setInterval(() => {
        secondsLeft--
        time.textContent = 'Time: ' +  secondsLeft;

    }, 1000);
}

function btnClick() {
    btn.classList.add('hide');
    myTimer();
    myObj();
    myQuestion();
  
}

function moveAlong(e){
    myObj();
    myQuestion();
  
}




var options = [
  {
    question: "What sound do cats make?",
    answer: ["Moo", "Meow", "Woof", "Neigh"],
  },

  {
    question: "Are dogs mamals?",
    answer: ["yes", "no"],
  },
  {
    question: "A group of birds are called...",
    answer: ["A flock", "A pride", "A jet", "An aeroplane"],
  },
  {
    question: "Which bird can fly backwards?",
    answer: ["A penguin", "A hummingbird", "A crow", "A parrot"],
  }
];

btn.addEventListener("click", btnClick);
for(var i = 0; i < anBtn.length; i++){
    anBtn[i].addEventListener('click', moveAlong);
}