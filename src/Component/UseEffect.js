import React, { useEffect, useState } from "react";

export default function AddEffect(){
    
    const[getdata, setdata]=useState(2);  //usestate hook 
    const[adds, setadd]=useState(0)

    // const Adds = ()=>{  //This is arrow function declaration.
    //    setdata(getdata+1);
    // }

    // function add(){ //This function declaration
    //     setdata(getdata+1);
    // }
    useEffect(()=>{
       console.log("hiii")
       setadd(getdata*2)

    },[getdata]);

    return(
        <div>
            <h2>{getdata}</h2>
            <button onClick={()=>setdata(getdata+2)}>+</button>
            <p>{adds}</p>
            
        </div>
    );
}