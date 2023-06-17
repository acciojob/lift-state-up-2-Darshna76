import React, {useState} from "react";

const Child = ({handleInput}) => {
    return (
       <div className="child">
          <h1>Child Component</h1>
          <input
             type="text"
             onChange={(e) => {
                handleInput(e.target.value);
             }}
          />
       </div>
    );
}

export default Child