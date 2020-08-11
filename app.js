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
}

];


function showquestion(){
//show question
var qu=document.getElementById('q1_ele');
qu.innerHTML=questionArr[0].question;

//show option
var op1_1=document.getElementById("op1_1");
var op1_2=document.getElementById("op1_2");
var op1_3=document.getElementById("op1_3");
op1_1.innerHTML=questionArr[0].options[0];
op1_2.innerHTML=questionArr[0].options[1];
op1_3.innerHTML=questionArr[0].options[2];


}

 