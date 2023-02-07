import React, { useEffect, useState } from "react";

export default function FunctionApi(){

    const [data,setdata]=useState([]);
console.log("d",data);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res=>res.json())
        .then(response=>setdata(response))
    },[]);

    return(
        <div>
           <h2>Hiii</h2>
           {data.map((item)=>(
                   <h2 key={item.id}>{item.name}</h2>  ///Array of object mapping
           ))} 



          {/* {
            Object.keys(data).map((items)=>(   ///plain object mapping
                <h2>{data[items].name}</h2>
            ))
          } */}
        </div>
    );
}