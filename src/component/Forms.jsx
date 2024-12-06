
import './Forms.css';
import React, { useState } from 'react';

function Forms() {

    const [inputs, setInputs]= useState({
        username:'',
        email:'',
        password:'',
        cpassword:''
    })


    const [focus, setFocus]= useState({
        errName: false,
        errEmail: false,
        errPass: false,
        errCpass: false
    })

    //prevent page refreshing once submit button clicked//
   
const handleSubmit =(e) =>{

    e.preventDefault(); 
}

 const handleChange = (e) =>{
    const name =e.target.name;
    const value = e.target.value;
    setInputs({...inputs, [name] :value})
 }
  return (

//{inputs.username}, {inputs.email},{inputs.password} //
//new lrearnings: patterns, required, onBlur//
    
    <div className='container col-5 p-5'>
      
        <h3 style={{textAlign:'center'}}>Form Validation</h3>

        <form onSubmit={handleSubmit}> 
            <div className='form-group'>
            <i class="fa-solid fa-user"></i>Username

< input  type="text"
pattern="^[A-Za-z0-9].{2,16}" 
className='form-control' 
id='name' 
placeholder='Username' 
name='username' 
value={inputs.username} 
onChange={handleChange} 
onBlur={()=>setFocus({...focus , errName : true})} 
focus = {focus.errName.toString()}
 required  /> 
  <span>Username should have 3-16 characters</span>             

            </div>

            <div className='form-group'>
                <label htmlFor="email"><i class="fa-solid fa-envelope"></i>Email Id</label>
                <input type="email"  id='email' className='form-control'  placeholder='Email Id' name='email' value={inputs.email} onChange={handleChange} onBlur={()=>setFocus({...focus , errEmail : true})}  focus = {focus.errEmail.toString()} required /> <span>Enter a valid Email Id</span>
            </div>

            <div className='form-group'>
                <label htmlFor="password"><i class="fa-solid fa-lock"></i>Password</label>
                <input type="password" pattern="(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                className='form-control' placeholder='Password' name='password'value={inputs.password} onChange={handleChange} onBlur={()=>setFocus({...focus , errPass : true})}  focus = {focus.errPass.toString()} required  /><span>Password must have minimum 8 characters and include atleast 1 upper case, 1 digit and 1 special character</span>

            </div>

            <div className='form-group'>
                <label htmlFor="cpassword"><i class="fa-solid fa-lock"></i>Confirm Password</label>
                <input type="password" pattern={inputs.password} className='form-control' placeholder='Confirm Password' name='cpassword'value={inputs.cpassword} onChange={handleChange} onBlur={()=>setFocus({...focus , errCpass : true})}  focus = {focus.errCpass.toString()} required /><span>Password is not matching</span>

            </div>
            <button type='submit' className='btn btn-primary' value='submit'>Submit</button>
        </form>
    </div>
    
  )
}

export default Forms