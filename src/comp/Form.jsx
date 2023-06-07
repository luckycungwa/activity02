import React from "react";
import {useState} from 'react';

function Form() {
const [inputValue, setInputValue] = useState("");
const [option, setOption] = useState("Select Option");

const CheckInput = (event) => {
// create state event to handle changes
setInputValue(event.target.value);
//calling the newInput value to check if its state has changed its currrent value (event.target.value)
//
};
const CheckOption = (event) => {
    //
    setOption(event.target.value);
}

    return(
        // Using States

        // Create form elements
        <div className="form">
        <img src="./spiderman.png" className="formPic"/>
            <h1>SUBSCRIBE!</h1>
            <br/>
            {/* INPUT ELEMENTS */}
            <input type="text" placeholder="John" onChange={CheckInput} value={inputValue}></input>
            <input type="text" placeholder="Doe"></input>
            <br/>
            <input type="text" placeholder="user@email.com"></input>
            {/* OPTION ELEMENTS */}
            <select className="options" onSelect={CheckOption} value={option}>
            <option >MOVIES</option>
            <option>Horror</option>
            <option>Comedy</option>
            <option>Action</option>
            <option>Thriller</option>
            <option>Other</option>
            </select>
            <br/>
            <button>Subscribe Now</button>

            <p className="wrapText"> {inputValue} & your Option was: {option}</p> 
        </div>
    );

}

export default Form;