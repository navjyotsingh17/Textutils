import React, { useState } from 'react'



export default function Textform(props) {

    //uppercase method
    const handleUpClick= ()=> {
       // console.log("upClick was clicked"+ text)
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Your text has been converted to uppercase","success" );
       
    }

    //lowercase method
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your text has been converted to lowercase", "success");
    }

    //method to write the text in the text box
    const handleOnChange = (event) => {
       // console.log("onChange was clicked")
       // console.log(event.target.value);
        setText(event.target.value); // this line grab the value what user is writing and set the state of the text to the value entered by the user.
    }

    //method to clear the textbox
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Textbox has been cleared", "success");
    }

    //method to cpoy the text written in the text box
    const handleCopy=()=>{
        navigator.clipboard.writeText(text); 
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }

    //method to remve extra spaces betweeen words
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space from your text has been removed", "success");
    }

    //made a state to tell the default state and to set the state of the text
    const [ text, setText ]= useState("");


    //returning the text box, chaning the color for dark mode, all the buttons etc
  return (
    <>
          <div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "rgb(4 3 51)" }}>
              <h1 className="mb-4">{props.heading}</h1>
              <textarea className="form-control" value={text} style={{ background: props.mode === "dark" ? "#13466e" : "white", 
              color: props.mode === "dark" ? "white" : "black" }} onChange={handleOnChange} id="mybox" rows="10" ></textarea>
         </div>
            
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Textbox</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

          <div className="container my-4" style={{ color: props.mode === "dark" ? "white" : "rgb(4 3 51)" }}>
                <h2>Text Summary</h2>

                {/* In summary, the below code calculates the number of non-empty words (or substrings) in the text string by 
                splitting the string into an array, filtering out any empty strings, and then counting the remaining elements in the filtered array. */}
              <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            
              <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
                <h2>Text Preview</h2>
                <p>{text.length > 0 ? text:"Nothing to preview!"}</p>
            </div>
    </>
    )
                
}

