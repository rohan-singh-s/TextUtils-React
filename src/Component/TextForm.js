import React, { useState } from 'react'

export default function TextForm(props) {

  const handleupClick = () => {
    //console.log("uppercase was clicked" +text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase!","success")
  }

  const handledownClick = () => {
    //console.log("uppercase was clicked" +text);
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase!","success")
  }
  const ClearText = () => {
    //console.log("uppercase was clicked" +text);
    let newtext = " ";
    setText(newtext)
    props.showAlert("Text Cleared!","success")
  }

  const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords

    setText(newText);
    props.showAlert("Text Reversed!","success")
  };

  const replaceString = () => {
    let replaceval = prompt("Enter the word to be replaced:")
    let tobereplaced = new RegExp(replaceval, 'g');

    let toreplace = prompt("Enter the text that you want to replace with:");

    let newText = text.replace(tobereplaced, toreplace);
    setText(newText);
    props.showAlert("Text Replaced!","success")
  }

  const handleCopy = () => {
    let text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied!","success")
  }


  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle1')
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop"
      props.showAlert("Text Speech Enabled!","success")
    }
    else {
      toogle.innerHTML = "Speak"
      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel()
        props.showAlert("Text Speech disabled!","success")
      }
    }
  }

  const handleonChange = (event) => {
    // console.log("onchange");
    setText(event.target.value)
  }



  const [text, setText] = useState('');
  return (
    <>

      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }} >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonChange} style={{ backgroundColor: props.mode === "dark" ? "black" : "white", color: props.mode === "dark" ? "white" : "black", border: props.mode === "dark" ? "1px solid white" : "1px solid black" }} id="my-box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handledownClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={ClearText}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={reversed}>Reverse</button>
        <button className="btn btn-primary mx-2" onClick={replaceString}>Replace text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle1">Speak</button>

      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h3>Text Summary</h3>

        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter a text to preview"}</p>
      </div>
    </>
  )
}
