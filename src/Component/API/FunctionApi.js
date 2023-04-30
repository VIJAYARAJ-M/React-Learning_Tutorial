import React, { useEffect, useState } from "react";

export default function FunctionApi(){

    const [data,setdata]=useState([]);
    console.log("d",data);

    const [person, setPerson] = useState(null);
    console.log("Person",person);

   
    const get =()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(response=>setdata(response))
    }
    

    // const Handle = (item) =>{
    //   console.log("Name",item);
    //   fetch(`https://jsonplaceholder.typicode.com/users/${item.id}`)
    //   .then(Res=>Res.json())
    //   .then(result=>setPerson(result))
    // }

     const Delete = (id) =>{
       const newdata =data.filter((data)=>data.id !== id)
       setdata(newdata)
      
     }
    return(
        <div>
           <h2>Hiii</h2>
           {data.map((item)=>(
                   <h4 key={item.id}>{item.id}.{item.username} <button onClick={()=>Handle(item)}>{item.username}</button></h4>
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