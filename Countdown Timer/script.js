// const date=new Date();
// console.log(date);

const days=document.getElementById('days');
const hours=document.getElementById('hours');
const mins=document.getElementById('mins');
const secs=document.getElementById('secs');

const formatTime=(time)=>{
    return time<10? `0${time}`:time;
}

const updateCountDown=(deadline)=>{
    const currentTime=new Date();
    const timeDifference=deadline-currentTime; //miliseconds
    //console.log(timeDifference);
    //calculate days, mins , hours ,secs from timedifference 
    
    let calcSecs=Math.floor(timeDifference/1000) %60;
    //console.log(calcSecs);
    
    let calcMins=Math.floor(timeDifference/1000/60)%60;
    //console.log(calcMins);

    let calcHours=Math.floor(timeDifference/1000/60/60)%24;
    //console.log(calcHours);

    let calcDays=Math.floor(timeDifference/1000/60/60/24);
    //console.log(calcDays);

    
    days.textContent=formatTime(calcDays);
    hours.textContent=formatTime(calcHours);
    mins.textContent=formatTime(calcMins);
    secs.textContent=formatTime(calcSecs);

    //console.log(days);

    
}

const countDown=(targetDate)=>{
     setInterval(()=>updateCountDown(targetDate),1000);

}


const targetDate=new Date("December 01 2024 07:00");
countDown(targetDate);