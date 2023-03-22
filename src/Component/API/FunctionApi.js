import React, { useEffect, useState } from "react";

export default function FunctionApi(){

    const [data,setdata]=useState([]);
    console.log("d",data);

   
    const get =()=>{
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res=>res.json())
        .then(response=>setdata(response))
    }

    return(
        <div>
           <h2>Hiii</h2>
           {data.map((item)=>(
                   <h4 key={item.id}>{item.name}</h4>
                     ///Array of object mapping
           ))} 

            <button onClick={get}>Click</button>

          {/* {
            Object.keys(data).map((items)=>(   ///plain object mapping
                <h2>{data[items].name}</h2>
            ))
          } */}
        </div>
    );
}