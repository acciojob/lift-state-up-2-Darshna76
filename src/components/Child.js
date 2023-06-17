import React, {useState} from "react";

const Child = ({renderFun})=>{

    return(
        <div className="child">
            <h1>Child Component</h1>
            <input type="text" onChange={renderFun}/>
        </div>
    )
}

export default Child;