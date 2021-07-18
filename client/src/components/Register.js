import React, { useState } from 'react';
import './Register.css'
const Register = () => {
    const [user, setUser] = useState({
        email:"",password:""
    })

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const postData = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("invalid");
            console.log("invalid");
        } else {
            window.alert("valid"); 
            console.log("valid");
        }

        
    }
    return (
        <>
            <div className="form">
                <form autocomplete="off" method="POST" >
                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <input type="text" name="email" placeholder="Email..."
                            value={user.email}
                            autocomplete="false"
                            onChange={handleInputs}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" placeholder="Password..."
                            value={user.password}
                            autocomplete="false"
                           onChange={handleInputs}
                        />
                    </div>
                    <br />
                    <button type="submit" name="register" value="registered" onClick={postData}>Submit</button>
                </form>
            </div>
            <div>
              
            </div>
        </>
    )
}

export default Register;