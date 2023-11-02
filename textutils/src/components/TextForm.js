import React, {useState}from 'react'

export default function TextForm(props) {
  
  const handleUpClick=()=>{
    console.log("Uppercase was clicked");
  }

  const handleOnChange=()=>{
    console.log("On Change")
  }
  const [text,setText]=useState('Enter the text here 2');
  return (
    <div>
    <div className='container'>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange ={handleOnChange} id="myBox" rows="8"></textarea>
</div> 
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
</div>
  )
}
