const stepper = document.getElementById("stepper");
const préambule = document.getElementById("préambule");
const progretion = document.getElementById("pro");
const questionnaire = document.getElementById("box");
const questionDiv = document.getElementById("questionnaire");
const anti=document.getElementById('Anti-inflammatoires')
const réponce = document.getElementById("réponce");
const ruseltas = document.getElementById("ruseltas");
const pré = document.getElementById("pré");
const sui = document.getElementById("sui");
const répan = document.getElementById("répan");
const ts1 = document.getElementById("ts1");
const list = document.getElementsByClassName("list__item");
const count = document.getElementById("count");

// passer a l 'etape suivant
function bar(progres){
    progretion.style.width =`${(100/22)*(progres+1)}%`;
    progretion.style.backgroundColor='#1078AD';
    count.textContent= (cont +1) + '/' + quiz.length;

    //progretion.firstElementChild.style.width =`${100/22*progres}%`;
    //progretion.firstElementChild.style.backgroundColor='#1078AD';
    
}

ts1.addEventListener('click', nextStep);
 
function nextStep(){
    préambule.style.display='none';
    questionnaire.style.display='block';
    list[0].classList.remove('list__item--active');
    list[1].classList.add('list__item--active');
    showQuestion (cont)
    bar(cont)
   
}


// afficher la question
function showQuestion (questionIndex){
    let ques = quiz[questionIndex];
    questionDiv.textContent= ques.question;
    réponce.innerHTML=ques.choices;
    
}
let cont = 0
//afficher la question suivant

sui.addEventListener('click',nextQuestion);

function nextQuestion(){
    
    cont += 1
    showQuestion (cont)
    console.log(cont);
    if(cont > 0){
        pré.style.display="block"
   }
   if(cont >=1){
       anti.style.display="none"
   }
   bar(cont)
      
}

//afficher la question précedent
pré.addEventListener('click',lastQuestion);
function lastQuestion(){
    cont -= 1
    showQuestion (cont)
    console.log(cont);
    if(cont <= 0){
       pré.style.display="none"
    }
    if(cont <1){
        anti.style.display="block"
    }

    bar(cont)

}
const stepper = document.getElementById("stepper");
const préambule = document.getElementById("préambule");
const progretion = document.getElementById("pro");
const questionnaire = document.getElementById("box");
const questionDiv = document.getElementById("questionnaire");
const anti=document.getElementById('Anti-inflammatoires')
const réponce = document.getElementById("réponce");
const ruseltas = document.getElementById("ruseltas");
const pré = document.getElementById("pré");
const sui = document.getElementById("sui");
const répan = document.getElementById("répan");
const ts1 = document.getElementById("ts1");
const list = document.getElementsByClassName("list__item");
const count = document.getElementById("count");

// passer a l 'etape suivant
function bar(progres){
    progretion.style.width =`${(100/22)*(progres+1)}%`;
    progretion.style.backgroundColor='#1078AD';
    count.textContent= (cont +1) + '/' + quiz.length;

    //progretion.firstElementChild.style.width =`${100/22*progres}%`;
    //progretion.firstElementChild.style.backgroundColor='#1078AD';
    
}

ts1.addEventListener('click', nextStep);
 
function nextStep(){
    préambule.style.display='none';
    questionnaire.style.display='block';
    list[0].classList.remove('list__item--active');
    list[1].classList.add('list__item--active');
    showQuestion (cont)
    bar(cont)
   
}


// afficher la question
function showQuestion (questionIndex){
    let ques = quiz[questionIndex];
    questionDiv.textContent= ques.question;
    réponce.innerHTML=ques.choices;
    
}
let cont = 0
//afficher la question suivant

sui.addEventListener('click',nextQuestion);

function nextQuestion(){
    
    cont += 1
    showQuestion (cont)
    console.log(cont);
    if(cont > 0){
        pré.style.display="block"
   }
   if(cont >=1){
       anti.style.display="none"
   }
   bar(cont)
      
}

//afficher la question précedent
pré.addEventListener('click',lastQuestion);
function lastQuestion(){
    cont -= 1
    showQuestion (cont)
    console.log(cont);
    if(cont <= 0){
       pré.style.display="none"
    }
    if(cont <1){
        anti.style.display="block"
    }

    bar(cont)

}
