import React, { useContext } from 'react'
import { MyContext } from './Context'

export default function Register() {
  const regVal = useContext(MyContext)
  return (
    <div className='register'>
      <div className='countProdd'>{regVal.bagLength}</div>
      <h1>Register</h1>
      <h3>name</h3>
      <input type="text" placeholder='enter name' onChange={(e) => { regVal.setname(e.target.value) }} />
      <h3>surname</h3>
      <input type="text" placeholder='enter surname' onChange={(e) => { regVal.setsurname(e.target.value) }} />
      <h3>mail</h3>
      <input type="email" placeholder='enter email' onChange={(e) => { regVal.setemail(e.target.value) }} />
      <h3>password</h3>
      <input type="password" placeholder='enter password' onChange={(e) => { regVal.setpassword(e.target.value) }} />
      <p></p>
      <form action=""><button onClick={regVal.handelclick}>register</button></form>
    </div>
  )
}
