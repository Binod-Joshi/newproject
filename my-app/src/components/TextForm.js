import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnChange=(event)=>{
    // console.log('onchange');
    setText(event.target.value)
  }

    const handleUpClick=()=>{
        // console.log('upper case was clicked'+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase','success');
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert('converted to lowercase','success');

    }
    const handleCopy=()=>{
      var text=document.getElementById('textMain');
      // text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert('coppied','success');

    }
    const handleClear=()=>{
      setText('');
      props.showAlert('text is cleared','success');

    }
    const handleSpaces=()=>{
     let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Extra spaces are removed','success');

    }

    const [text, setText]=useState('');
    //  setText("new text");
    return (
      <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
           <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#4b4848':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="textMain" rows="8" placeholder='Enter a text'></textarea>
          </div>
          <button disabled={text.length===0} className={`btn btn-primary mx-2 my-1 text-${props.mode==='light'?'grey':'light'}`} onClick={handleUpClick}>convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpaces}>Remove extra spaces</button>




    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`} >
      <h1>the summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}</p>
      {/* <p>{text.split(' ').length*0.008} minute average read time</p> */}
      <p>{text.split(' ').filter((element)=>{return element.length!==0}).length*0.008} minute average read time</p>

      <h2>preview </h2>
      <p>{text.length>0?text:'nothings to preview'}</p>
    </div>
   </>
  )
}
