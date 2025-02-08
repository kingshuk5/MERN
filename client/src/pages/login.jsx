import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [user,setUser]=React.useState({
        email:"",
        password:""
    })
    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
    }
    function handleInput(e){
        console.log(e);
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value
        });
    };


  return(

    <div>
        
        <form onSubmit={handleSubmit}>
        <label>Email ID</label><input type="email" name="email" placeholder="email" id="email" required value={user.email} onChange={handleInput}/> <br/>
                <label>Password</label>
                                    <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="password" 
                                    id="password" 
                                    required
                                    value={user.password}
                                    onChange={handleInput}
                                     /> <br/> 
                
                <button type='submit'>Login</button>  <br/>                                   
                                     
              </form>

              <div>New user?</div>
              <div><Link to="/registration">Register yourself</Link></div>
    </div>
    
  )
};