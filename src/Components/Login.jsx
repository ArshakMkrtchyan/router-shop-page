import React, { useContext } from 'react'
import { MyContext } from './Context';

export default function Login() {
  const loginVal = useContext(MyContext);

  function handleout() {
    localStorage.removeItem('User')
  }

  return (
    <div className='login'>
      <div className='countProdd'>{loginVal.bagLength}</div>
      <h2>Login</h2>
      <h3>Mail</h3>
      <input type="email" placeholder='enter your mail' onChange={(e) => { loginVal.setmail(e.target.value) }} />
      <h3>Password</h3>
      <input type="password" placeholder='enter your password' onChange={(e) => { loginVal.setpassword(e.target.value) }} />
      <p></p>
      <button onClick={loginVal.handelclick}>Login</button>
      <form action=""><button className='logOut' onClick={handleout}>Log out</button></form>
    </div>
  )
}
