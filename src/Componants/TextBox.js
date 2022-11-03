import React, {useState} from 'react'

export default function TextBox(props) {
    const [text, setText] = useState('');
    
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }
    const handleLowClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text has been coppid', 'success');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces has been removed', 'success');
    }
    const handleclrClick =()=>{
        setText('');
        props.showAlert('Text has been cleared', 'success');
    }
   
    // const speak = () => {
    //     let msg = new SpeechSynthesisUtterance(text);
    //     window.speechSynthesis.speak(msg);
    //     const toogle = document.getElementById('toggle')
    //     if (toogle.textContent ==="Speak") {
    //         toogle.innerHTML = "Stop"
    //     }
    //     else {
    //         toogle.innerHTML = "Speach"
    //         if (toogle.innerHTML === "Speak"){
    //             window.speechSynthesis.cancel()
    //         }
    //     }
    // }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    return (
        <>
            <div className = "container" style={{color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"  value={text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode === "light" ? "white" : "grey" ,color: props.mode === "dark" ? "white" : "black" }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>ConvertToUpCase</button>
                <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>ConvertToLowCase</button>
                <button disabled ={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button disabled ={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclrClick}>Clear</button>
                
            </div>
            <div className="container my-2" style={{color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Text Samary</h2>
                <p>You type {text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characturs</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your text above textbox to get preview"}</p>
            </div>
            
        </>
        
    )
}
