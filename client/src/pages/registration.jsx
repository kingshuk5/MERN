import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export const Registration = () => {
  const navigate =  useNavigate();
  const [user, setUser] = useState({
          username: "",
          phone: "",
          email: "",
          password: ""
      })
      const handleSubmit = async (e) => {
          e.preventDefault();
          const {email,phone, password}= user;
          if(!email||!password) {
              toast.error("Fill all the fields!", {position: "top-center"});
              return;
          }
          if(password.length < 8) {
              toast.error("Password must be 8 characters long!", {position: "top-center"});
              return;
          }
          if(phone.length !== 10) {
            toast.error("Phone Number must be 10 characters long!", {position: "top-center"});
            return;
        }
          // toast.success("Registration Successful!", {position: "top-center"});
          try {
            const response = await fetch('http://localhost:5000/api/auth/registration', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                toast.success("Registration Successful!", { position: "top-center" });

                // Reset form fields
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                });

                // Redirect to login after a delay to show toast
                setTimeout(() => navigate("/login"), 2000);
            } else {
                toast.error("Registration failed. Try again!", { position: "top-center" });
            }

        } catch (error) {
            console.error("Error from Register: ", error);
            toast.error("Something went wrong!", { position: "top-center" });
        }
    };
      const handleInput = (e) => {
          let name = e.target.name;
          let value = e.target.value;
  
          setUser({
              ...user, [name]:value
          })
      }
  return (
    <div style={{margin: "10rem", fontSize: "20px"}}>
      <ToastContainer/>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id='username' name='username' type="text" placeholder='Enter Username' value={user.username} onChange={handleInput}/>
            <br />
            <label htmlFor="phone">Phone</label>
            <input id='phone' name='phone' type="number" placeholder='Enter Phone number' value={user.phone} onChange={handleInput}/>
            <br />
            <label htmlFor="email">Email Id</label>
            <input id='email' name='email' type="email" placeholder='Enter Email Id' value={user.email} onChange={handleInput}/>
            <br />
            <label htmlFor="password">Password</label>
            <input id='password' name='password' type="password" placeholder='Enter Password' value={user.password} onChange={handleInput}/>
            <br />
            <button type='submit'>Register</button>
        </form>
        <span>Already Registered? </span>
        <span><Link to="/login">Login</Link></span>
    </div>
  )
}



// import React from 'react'
// import { Link } from 'react-router-dom'
// import {toast,ToastContainer} from  'react-toastify'

// export const Registration = () => {
//   return (
//     <>
//     <div>
//             <form>
//                 <label>UserName</label><input type="text" name="username" placeholder="UserName" id="username" required/> <br/>
//                 <label>Phone Number</label><input type="number" name="phone" placeholder="phone" id="phone" required/> <br/>
//                 <label>Email ID</label><input type="email" name="email" placeholder="email" id="email" required/> <br/>
//                 <label>Password</label>
//                                     <input 
//                                     type="password" 
//                                     name="password" 
//                                     placeholder="password" 
//                                     id="password" 
//                                     required
//                                      />  
                
//                 <button>Login</button>                                     
                                     
//               </form>

//               <div>New user?</div>
//               <div><Link to="/login">Already LogIn?</Link></div>
//     </div>
//     </>
//   )
// }
