import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const Lgn = () => {
    const [loginsdata,setLoginsData]=useState('')

    let handleChange=(event)=>{
      setLoginsData({...loginsdata,[event.target.name]:event.target.value})
      console.log(loginsdata);
    }
    const data=useSelector((state)=>state.Register.data)

    let check=()=>{
      if (loginsdata.username==data.username && loginsdata.password==data.password){
        alert('hello')
      }
      else{
        alert('user not found')
      }  
    }
  return (


    <div>
        <div>
      <center>
        <h3>LOGIN FORM</h3>
        {loginsdata?.username}
        {loginsdata?.password}

        <form>
           <label>User Name</label><br />
            <input onChange={handleChange} name='username' type="text" /><br />
           
            <label>Password</label><br />
            <input onChange={handleChange} name='password' type="password" /><br />

            <button type='button' onClick={check}>Login</button>
            <button>forget password</button>

           
          
        </form>
        </center>
    </div>
    </div>
  )
}

export default Lgn