import React, {useState} from 'react'

export default function TextBox(props) {
    const [text, setText] = useState('Enter Text Here');
    
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
    const handleclrClick =()=>{
        let newText = "";
        setText(newText);
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
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>ConvertToUpCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>ConvertToLowCase</button>
                <button className="btn btn-primary mx-2" onClick={handleclrClick}>Clear</button>
                
            </div>
            <div className="container my-2" style={{color: props.mode === "dark" ? "white" : "black" }}>
                <h2>Text Samary</h2>
                <p>You type {text.split(" ").length} words and {text.length} characturs</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your text above textbox to get preview"}</p>
            </div>
            <div><h1>helal khan</h1></div>
        </>
        
    )
}
