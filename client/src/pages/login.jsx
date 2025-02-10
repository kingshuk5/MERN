import React from 'react'
import { Link } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'

export const Login = () => {
    const [user,setUser]=React.useState({
        email:"",
        password:""
    })
    function handleSubmit(e){
        e.preventDefault();
        const {email,password}=user;
        if(!email || !password){
            toast.error("Please fill all the fields",{position:'top-center'});
        }
        if(password.length<8){
            toast.error("Password must be of atleast 6 characters",{position:'top-center'});
        }
        toast.success("Login successful",{position:'top-center'});
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

    <><div>

      <form onSubmit={handleSubmit}>
        <label>Email ID</label><input type="email" name="email" placeholder="email" id="email" required value={user.email} onChange={handleInput} /> <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          id="password"
          required
          value={user.password}
          onChange={handleInput} /> <br />

        <button type='submit'>Login</button>  <br />

      </form>

      <div>New user?</div>
      <div><Link to="/registration">Register yourself</Link></div>
    </div><ToastContainer /></>
    
  )
};