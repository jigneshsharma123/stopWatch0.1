let [sec,min,hr] = [0,0,0]; //this is the 3d array for keeping track of second min and hour value ;

let displayTime = document.getElementById('time'); //targeting the html element 

let timer = null; //for holding the id of the setInteval();
function stopWatch() {
   sec++;
   if(sec == 60) {
       sec = 0;
      min++;
      if(min == 60) {
         hr++;
         min=0;
      }
      /* 
      Main logic 
      as we know if a second reaches to the 60 it will again turn into 0 and start again from 0 to 60 so for that we use logic if sec == 60 reset to zero along with increasing the value of the min 
      similary when min == 60 it going to turned into zero and hr will increase by 1 
      and so on... 
      
      */
      
      
      
   }
   /* this is used for showing the stopWatch in the form 00:00:00 like that  */
   let h = hr < 10 ? "0" + hr : hr;
   let m = min < 10 ? "0" + min : min;
   let s = sec < 10  ? "0" + sec : sec;
   //displaying the updated value of the 3d array
   displayTime.innerHTML = h + ":" + m + ":" + s;
}
function start() {
   
   if(timer!= null) {
      clearInterval(timer);
   }
 timer =   setInterval(stopWatch,1000);
}
function stop() {
   clearInterval(timer);
   
}
function reset() {
   clearInterval(timer);
    [sec,min,hr] = [0,0,0];
   displayTime.innerHTML = "00:00:00";
}