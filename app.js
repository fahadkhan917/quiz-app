// function check(){

//     var scroce=0;
//     var right=document.getElementById('q1-a1');
//     var wrong1=document.getElementById('q1-a2');
//     var wrong2=document.getElementById('q1-a3');
//     var wrong3=document.getElementById('q1-a4');
//    if(right.checked==true){
//   ++scroce;
//   alert("right answer");

//    }
//    else{
//   alert("sorry");

//    }
//    alert(scroce);
// }


var questionArr=[

{question:"Which of the following is used to read a HTML page and render it?",
answer:"Web browser",
options:[
    "Web Browser",
    "Web server",
    "web matrix",
    
]
},
{question:"LCD stand for?",
answer:"liquid crystal display",
options:[
    "li crystal display",
    "liquid crystal display",
    "crystal display",
    
]
},
{question:"pakistan captial is?",
answer:"Islamabad",
options:[
    "karachi",
    "quetta",
    "Islamabad",
    
]
}

];


function showquestion(e){
//show question
var qu=document.getElementById('q1_ele');
qu.innerHTML=questionArr[e].question;

//show option
var optionelement=document.getElementsByClassName("optionElement");
for(var i=0;i<questionArr.length;i++){


    optionelement[i].innerHTML=questionArr[e].options[i];

}




}

var questioncount=0;
var score=0;


function nextques(){

var next=document.getElementById("next");
questioncount++;
showquestion(questioncount);
removeActiveClass();
validate();


}

function putActiveclass(e){
    removeActiveClass();
e.classList.add("active");


}
function removeActiveClass(){
    var active=document.getElementsByClassName("active");
    for(var i=0;i<active.length;i++){

active[i].classList.remove("active");
 
    }
    
    
    }
 

    function validate(){

        var active=document.getElementsByClassName("active");
        console.log(active)

    }