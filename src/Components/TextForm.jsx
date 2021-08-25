import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState(' ');
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyClick =() =>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleClear = () => {
        let newText= '';
        setText(newText);
    }
    const handleSpace = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <>
            <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode ==='dark'?'#042743':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra space</button>
            </div>
            <div className="container my-4" style={{color: props.mode ==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p><strong>{text.split(" ").length -1} Word {text.length} Characters</strong></p>
            </div>
        </>
    )
}
