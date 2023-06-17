import React from "react";

const Child = ({modal, displayFun})=>{

    return(
        <div>
            <h1>Child Component</h1>
            <button onClick={displayFun}>Show Modal</button>
            {
                modal &&
                 (<div>
                    <h3>Modal Content</h3>
                    <p>This is the modal content.</p>
                 </div>)
            }
        </div>
    )
}

export default Child;