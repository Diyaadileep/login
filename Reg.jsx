import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData} from './Slice'
import { Link, useNavigate } from 'react-router-dom'
import ThemeContext from './ThemeContext'


const Reg = () => {
  const [logindata ,setloginData]=useState('')


  let value=useContext(ThemeContext)
  console.log(value);

const navigate=useNavigate()

  let addToRedux=()=>{
dispatch(addData(logindata))
navigate('/next')
  }
    
    const data=useSelector((state)=>state.Register.data)
    const dispatch=useDispatch()


    let handleChange=(events)=>{
      setloginData({...logindata,[events.target.name]:events.target.value})
    }
  


    


  return (

    <div>

        
{data.username}
{data.password}
      <h3><center>REGISTRATION FORM</center></h3>
      <center>
        <table>
          <tbody>
            <tr>
              <td><label>User Name</label></td>
              <td><input onChange={handleChange} name='username' type="text" /></td>
            </tr> 
            <tr>
              <td><label>Gender</label></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td><label>Email</label></td>
              <td><input type="email" /></td>
            </tr>
            <tr>
              <td><label>Student Id</label></td>
              <td><input type="" /></td>
            </tr>
            <tr>
              <td><label>Password</label></td>
              <td><input onChange={handleChange} name='password' type="password" /></td>
            </tr>
            <tr>
              <td><label>Confirm Password</label></td>
              <td><input type="password" /></td>
            </tr>
            <button onClick={()=>addToRedux()}>REGISTER</button> 
            <Link to='/next'>next page</Link>
          </tbody>
        </table>
      </center>
       </div>
  )
}



export default Reg;
