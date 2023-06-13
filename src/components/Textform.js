import React, { useState } from 'react'



export default function Textform(props) {

    const handleUpClick= ()=> {
       // console.log("upClick was clicked"+ text)
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Your text has been converted to uppercase","success" );
       
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your text has been converted to lowercase", "success");
    }

    const handleOnChange = (event) => {
       // console.log("onChange was clicked")
       // console.log(event.target.value);
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Your text has been cleared", "success");
    }

    const handleCopy=()=>{
        let text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Your text has been clipboard", "success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space from your text has been removed", "success");
    }


    const [ text, setText ]= useState("");
  return (
    <>
          <div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "rgb(4 3 51)" }}>
             <h1>{props.heading}</h1>
              <textarea className="form-control" value={text} style={{ background: props.mode === "dark" ? "grey" : "white", 
              color: props.mode === "dark" ? "white" : "black" }} onChange={handleOnChange} id="mybox" rows="10" ></textarea>
         </div>
            
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Textbox</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

          <div className="container my-4" style={{ color: props.mode === "dark" ? "white" : "rgb(4 3 51)" }}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h2>Text Preview</h2>
                <p>{text.length>0?text:"Write something in the above textbox to preview it here"}</p>
            </div>
    </>
    )
                
}

