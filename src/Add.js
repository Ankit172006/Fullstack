import React from 'react'
import Component from './Component'
import "./Add.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Add() {
   const [Nmaeinput, nameinputtype] = useState('');
   
   const Namechange = (event) => {
     nameinputtype(event.target.value);
     };

   const [Emailinput, emailinputtype] = useState('');
   const Emailchange = (event) => {
     emailinputtype(event.target.value);
   };

   const [Ageinput, ageinputtype] = useState();
   const Agechange = (event) => {
    ageinputtype(event.target.value);
   };  
   const submitfunction =()=>{
      <Component  Names={Nmaeinput}/>
      console.log(Nmaeinput)
   }          
   
  return (
     <div className="main2">
      
         <div className="main_from_container">
         <div className="input_name">
            <div className='title'>Name...</div>
        <input type="text" placeholder='Neme'value={Nmaeinput} onChange={Namechange}  required/>
         </div>
         <div className="input_email">
         <div className='title'>Email...</div>
        <input type="email" name="" id="email" value={Emailinput} onChange={Emailchange} placeholder='Email' />
         </div>
         <div className="input_age">
         <div className='title'>Age...</div>
        <input type="number" name="" id="age" value={Ageinput} onChange={Agechange} placeholder='Age' />
         </div>
         <div className="input_btn">
            <Link to="/">
            <button id='submit' onClick={submitfunction}>Submit</button>
            </Link>
           
         </div>
        </div>
      </div>
   
  )
}

export default Add
