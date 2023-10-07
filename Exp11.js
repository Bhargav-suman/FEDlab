//implementing digital clock using useEffect hook
import React, { useState, useEffect } from 'react';
function Exp11() {
    const [mytime, setTime]=useState(" ");
    const tick = ()=>{
        let d = new Date();
        let hours = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let time = `${hours>12?hours-12:hours}:${min}:${sec}`;
        if(hours<12){
            time = time +"AM";
        }
        else{
            time = time + "PM";
        }
        setTime(time);

    }
    useEffect(()=>{
        const t = setInterval(tick,1000);
        return()=>{
            clearTimeout(t);
        }
    },[mytime])
    return(
        <div>
            <h1>DigitalCLock</h1>
            <h2>{mytime}</h2>
        </div>
    )
}
export default Exp11;