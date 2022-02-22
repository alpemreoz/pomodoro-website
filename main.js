var start = document.getElementById('baslat');
var stop = document.getElementById('durdur');

var min = document.getElementById('minutes');
var sec = document.getElementById('seconds');
var bgchange = document.getElementById('timer-card');

var breakMin = document.getElementById('minutes');
var breakSec = document.getElementById('seconds');

var startTimer;
start.addEventListener('click', function(){
    if(startTimer == undefined){
        start.innerText="Duraklat"
        stop.innerText = "Durdur"
        startTimer = setInterval(timer, 1000)
    } else {
        start.innerText="Devam et"
        stop.innerText = "Yapılanlar"
        stopInterval();
        startTimer = undefined;
    }
})


function timer(){
    
    
    
    if(sec.innerText!= 0){
        sec.innerText--;
        
    }else if(min.innerText !=0 && sec.innerText==0){
        sec.innerText=59;
        min.innerText--;
        
    }

    if(min.innerText==0 && sec.innerText==0){
        // stopTimer();
        
        timeOut();
         
        // timer(stop())
        // timeOut ();
        
    }
    
    
}

function timeOut(){
    
        
    
         if(sec.innerText!= 0){
            sec.innerText--;
            
        }
        else if(min.innerText !=0 && sec.innerText==0){
            sec.innerText=59;
            min.innerText--;
        }
        if(min.innerText==0 && sec.innerText==0)
            // stopTimer();
            // bgchange.style.backgroundColor = "d04643";
            // min.innerText= "0";
            // sec.innerText= 13;
            bgchange.style.backgroundColor = "green"
            min.innerText = "00"
            sec.innerText = 03
            // timer(stop())
            // timeOut ();
            
         
    }



// function timeOut (){
//     bgchange.style.backgroundColor = "green";
    
    
         
    
//     if(breakSec.innerText!= 0){
//         breakSec.innerText--;
        
//     }
//     else if(breakMin.innerText !=0 && breakSec.innerText==0){
//         breakSec.innerText=59;
//         breakMin.innerText--;
        
//     }
//     if( breakMin.innerText == 0 && breakSec.innerText == 0){
//         min.innerText=25;
//         sec.innerText=00;
//     }

    //   if(breakMin.innerText == 0 && breakSec.innerText == 0){
    //       sec.innerText=9;
    //       min.innerText="0";
    //       bgchange.style.backgroundColor = "d04643";
    //       stopInterval();
         
        
    //  }
    
   
 // }

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}

function stopTimer(){
    clearInterval(timeOut);
}