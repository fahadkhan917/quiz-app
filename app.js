function check(){

    var scroce=0;
    var right=document.getElementById('q1-a1');
    var wrong1=document.getElementById('q1-a2');
    var wrong2=document.getElementById('q1-a3');
    var wrong3=document.getElementById('q1-a4');
   if(right.checked==true){
  ++scroce;
  alert("right answer");

   }
   else{
  alert("sorry");

   }
   alert(scroce);
}

