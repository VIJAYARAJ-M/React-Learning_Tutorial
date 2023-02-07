import React from "react";

export default function Item({item, add}){
    return(
        <div>
            <h2>Item</h2>
            {
                item.map((item,index)=>{
                    return <p key={index}>{item}</p>;
                })
            }
            <button onClick={add}>additem</button>
        </div>
    );
} 