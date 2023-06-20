import React from "react"
const Child=({changeHandle})=>{
    return(
        <div className="child">
            <h1>Child Component</h1>
            <input type="text" onChange={(event)=>{changeHandle(event.target.value)}}/>
        </div>
    )
}

export default Child
