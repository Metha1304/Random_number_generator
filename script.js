let randnum=document.getElementById("rand")

randnum.onclick=function(){
         number=Math.floor(Math.random()*101);
         document.getElementById("num").textContent="This is a  random number between 1-100 ="+ number;
         number1=Math.floor(Math.random()*10);
            document.getElementById("num1").textContent="This is a  random number between 1-10 ="+number1;
         number2=Math.floor(Math.random()*200);
            document.getElementById("num2").textContent="This is a  random number between 1-200 ="+number2;
        
          
}
