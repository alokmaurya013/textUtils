import React,{ useState } from "react";

export default function TextForm(props){
    const [text,setText]=useState(' ');
    
    const handleUpclick=()=>{
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to uppercase!","success");
    }

    const handleLoclick=()=>{
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("Converted to lowercase!","success");
    }

    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success");

    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces","success");
    }


    return(
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className="mb-2">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox"rows="5"></textarea>
            </div>
            <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Upper</button>
            <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Lower</button>
            <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2"style={{color:props.mode==='dark'?'white':'#042743'}}>

         <h1>Your text summary</h1>
           <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.trim().length} characters</p>
           <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
           <h2>Preview</h2>
           <p>{text.trim().length!==0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}