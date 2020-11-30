setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hourHand.style.transform = `rotate(${30*htime+mtime/2}deg)`;
    minuteHand.style.transform = `rotate(${6*mtime+stime/10}deg)`;
    secondHand.style.transform = `rotate(${6*stime}deg)`;


},1000);