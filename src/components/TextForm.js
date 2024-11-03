import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Text is converted to Upper Case", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Text is converted to Lower Case", "success");
  }; 
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert(" Text is copied to clipboard", "success");
  };
  const handleDownloadClick = () => {
    let newText = text;
    setText(newText);
    const blob = new Blob([newText], { type: "text/plain" });
    props.showAlert(" Text is Downloaded", "success");

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sample.txt"; // The name of the file to download
    document.body.appendChild(a);
    a.click();

    // Clean up by removing the anchor element and revoking the URL
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);  //text.split(/\s+/) can also be used 
    setText(newText.join(" "));
    props.showAlert(" Extra space is removed form the text", "success");
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("  Text is Cleared", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your Text here");
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark'?'#042743':'white', color: props.mode === 'dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary my-1" onClick={handleUpClick}>
          Cconvert to Uppercase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownloadClick}>
          Download Text
        </button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text in the above text area to preview something'}</p>
      </div>
    </>
  );
}
