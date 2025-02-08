import React from 'react'
import { Link } from 'react-router-dom'

export const Registration = () => {
  return (
    <>
    <div>
            <form>
                <label>UserName</label><input type="text" name="username" placeholder="UserName" id="username" required/> <br/>
                <label>Phone Number</label><input type="number" name="phone" placeholder="phone" id="phone" required/> <br/>
                <label>Email ID</label><input type="email" name="email" placeholder="email" id="email" required/> <br/>
                <label>Password</label>
                                    <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="password" 
                                    id="password" 
                                    required
                                     />  
                
                <button>Login</button>                                     
                                     
              </form>

              <div>New user?</div>
              <div><Link to="/login">Already LogIn?</Link></div>
    </div>
    </>
  )
}
