import React, {useState} from "react";
import Child from "./child";

const Parent = ()=>{
    let [change, setChange] = useState('');

    function renderChange(e){
        setChange(e.target.value);
    }

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{change}</p>
            <Child renderFun={renderChange} />
        </div>
    )
}

export default Parent;