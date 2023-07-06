import React,{useState} from 'react'


export default function Body(props) {
  const [text, settext] = useState("");
  
  const chan = (event) => {
    settext(event.target.value)
  }
  const uppercase = () => {
    let val = text.toUpperCase();
    settext(val);
    props.showalert('text is in upper-case',"success");
   
  }
  const lowercase = () => {
    let val = text.toLowerCase();
    settext(val);
    props.showalert('text is in lower-case',"success")
  
  }
  const clear = () => {
    let nul = "";
    settext(nul);
    props.showalert("text is clear","success");
  
  }
  const inver = () => {
    let inv = Array.from(text);
    let d = inv.reverse().join('');
    let str = String(d);
    settext(str)
    props.showalert("text is reverse","success");
    if(text==""){
      props.showalert('no text',"text-area is empty")
    }
 
    }

  
  const cap = () => {
    let letter = text;
    let changeletter = letter.charAt(0).toUpperCase() + letter.slice(1);
    settext(changeletter)
    props.showalert("first leter is in uppercase","success");
    if(text==""){
      props.showalert('no text','text-area is empty')
    }
  
  }
  const copi = () => {
 let c=document.getElementById('box');
 c.select();
 c.setSelectionRange(0, 9999);
navigator.clipboard.writeText(c.value)
props.showalert("text is copied","success");

    }
  

  return (
    <>
  <div className="container m-5 p-2" >
        <h1>{props.titlehead}</h1>
        <textarea   className="form-control " placeholder='enter your text' value={text} onChange={chan} rows="6" 
        style={{
          backgroundColor: props.moddes === "dark" ? "grey" : "white",
          color: props.moddes === "dark" ? "white" : "black"
        }} id="box">
        </textarea>
      </div>
      <div className="container m-5">
        <button type="button" onClick={uppercase} className="btn btn-primary ">Convert to upercase</button>
        <button type="button" onClick={lowercase} className="btn btn-secondary ms-3">Convert to lowercase</button>
        <button type="button" onClick={clear} className="btn btn-success ms-3">Clear text</button>
        <button type="button" onClick={inver} className="btn btn-danger ms-3">inverse your text</button>
        <button type="button" onClick={cap} className="btn btn-danger ms-3">capatilize leter</button>
        <button type="button" onClick={copi} className="btn btn-danger ms-3">copytext</button>
      </div>
      <div className="container m-5">
        <h1>{props.heading}</h1>
        <p>{text}</p>
        <p>total <b>{text.split(" ").length}</b> words and characters is <b>{text.length}</b></p>
      </div>

    </>
  )
}
