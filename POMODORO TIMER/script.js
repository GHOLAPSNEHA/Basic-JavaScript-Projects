const timer=document.querySelector('.timer');
const title=document.querySelector('.title');

const startBtn=document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resumeBtn  =document.querySelector('.resumeBtn');
const resetBtn =document.querySelector('.resetBtn');
const pomoCountsDisplay=document.querySelector('.pomoCountsDisplay');

//making variables
const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;
let timerId=null;
let oneRoundCompleted=false;   //1round= worktime + breaktime 
let totalCount=0;
let paused=false;

//function to update title
const updateTitle=(msg)=>{
    title.textContent=msg;
}

//function to save pomodoro counts to local storage
const saveLocalCounts=()=>{
    let counts=JSON.parse(localStorage.getItem("pomoCounts"));
    counts !==null? counts++:counts=1;
    localStorage.setItem("pomoCounts",JSON.stringify(counts));
}




//function to countdown
const countDown=(time)=>{
    return ()=>{
        const mins=Math.floor(time/60).toString().padStart(2,'0');
        const secs=Math.floor(time%60).toString().padStart(2,'0');
        timer.textContent=`${mins}:${secs}`;
        time--;
        if(time<0){
            stopTimer();
            if(!oneRoundCompleted){
                timerId=startTimer(BREAK_TIME);
                oneRoundCompleted=true;
                updateTitle("It's Break time!");
            }
            else{
                updateTitle("Completed 1 round of pomodoro.!");
                setTimeout(()=>updateTitle("start timer again!"),2000);
                totalCount++;
                saveLocalCounts();
                showPomoCounts();
            }
        }
    }    
}



//function to start timer
const startTimer=(startTime)=>{
    if(timerId!==null){
        stopTimer();
    }
    return setInterval(countDown(startTime),1000);
}

//function to stop timer
const stopTimer=()=>{
    clearInterval(timerId);
    timerId=null;
}

//function to get time in seconds 
const getTimeInSeconds=(timeString)=>{
    const[minutes,seconds]=timeString.split(":");
    return parseInt(minutes*60) + parseInt(seconds);
}


//adding evenlistener to start button
startBtn.addEventListener('click',()=>{
    timerId=startTimer(WORK_TIME);
    updateTitle("It's Work Time!");
});

//adding evenlistener to reset button
resetBtn.addEventListener('click',()=>{
    stopTimer();
    timer.textContent="25:00";
    updateTitle("Click start to start the timer!");
});


//adding evenlistener to pause button
pauseBtn.addEventListener('click',()=>{
    stopTimer();
    paused=true;
    updateTitle("Timer Paused..");
});

//adding evenlistener to resume button
resumeBtn.addEventListener('click',()=>{
    if(paused){
        const currentTime=getTimeInSeconds(timer.textContent);
        timerId=startTimer(currentTime);
        paused=false;
        (!oneRoundCompleted)? updateTitle("It's Work Time"):updateTitle("It's Break Time");
    }
    
});



//function to show completed pomodoros to screen from local storage
const showPomoCounts =()=>{
    const counts=JSON.parse(localStorage.getItem("pomoCounts"));
    console.log(counts);
    if(counts>0){
        pomoCountsDisplay.style.display="flex";
    }
    pomoCountsDisplay.firstElementChild.textContent=counts;

}

showPomoCounts();


