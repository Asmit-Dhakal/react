import React, {useState}from 'react'

export default function TextForm(props) {
  const [text,setText]=useState('Enter the text here');
  console.log(useState('Enter the text here 2'));
  return (
    <div>
    <div className='container'>
        <h1>{props.heading}- {text}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8"></textarea>
</div> 
</div>
<button className="btn btn-primary">Uppercase</button>
<div>
<label for="myfile">Browse</label>
<input type="file" id="myfile" name="myfile"></input>
</div>

</div>
  )
}
