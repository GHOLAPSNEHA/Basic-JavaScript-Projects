//3hands -- 
//12 hr = 360 deg
//1hour = 360/12 =30 deg angle
//1min =360/60 = 6deg
//1sec =360/60=6deg 



let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displayTime()
{
    let date=new Date();
    //getting hour,min,sec from data
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation= 30*hh+mm/2;
    let mRotation=6*mm;
    let sRotation=6*ss;

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);

















