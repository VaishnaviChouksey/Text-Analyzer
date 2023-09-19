import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState('');
  const handleUpClick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to uppercase!","success");
//setText("You have clicked on handleUpClick");
  }
  const handleClear=()=>{
    let newtext='';
    setText(newtext);
    props.showalert("Text cleared!","success");
  }
  const handleLoClick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to lowercase!","success");
  }
  const handleOnChange=(Event)=>{
    setText(Event.target.value);
  }
  const handleCopy=()=>{
    // var text=document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showalert("Text copied!","success");
  }
  const handleExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra Spaces removed!","success");
  }
  return (
    <>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
       <h1 className="mb-2">{props.heading}</h1> 
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
</div>
<div className='container my-3'style={{color: props.mode==='dark'?'white':'black'}}>
<h2>Your text Summary</h2>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
</>
  )
}
