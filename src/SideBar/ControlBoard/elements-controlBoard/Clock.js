import { useState, useEffect } from "react";
const Clock = ({color,fontSize,fontWeight,fontFamily}) => {
    // let time = new Date().toLocaleTimeString
    const[currentTime,setCurrentTime]=useState(new Date())
    useEffect(()=>{
        const time = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000)
        return ()=> clearInterval(time);
    },[])
    return(
        
            <div style={{color: color,fontSize: fontSize,fontWeight:fontWeight,fontFamily:fontFamily}}>{currentTime.toLocaleTimeString([], {hour : '2-digit',minute:'2-digit'})}</div>
    )

}
export default Clock;