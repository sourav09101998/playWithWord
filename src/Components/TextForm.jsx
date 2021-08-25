import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    
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
        document.getSelection().removeAllRanges();
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
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpace}>Remove Extra space</button>
            </div>
            <div className="container my-4" style={{color: props.mode ==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p><strong>{text.split(" ").filter((element)=>{return element.length!==0}).length } Words {text.length} Characters</strong></p>
            </div>
        </>
    )
}
