import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignUp from './SignUp';

import '../Style/style.css';

const LoginPage = () => {
    const [contact,setContact]=useState("");
    const [password,setPassword]=useState("");
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [details,setDetails]=useState([]);
    const [flag,setFlag]=useState(false);
    const [userExist,setUserExist]=useState(false);
    const [signupFlag,setSignupFlag]=useState(false);

    const navigate=useNavigate();

    const getData=async()=>{
        await axios.get("http://localhost:8080/logs").then(await function (res){
            setDetails(res.data);
            // console.log(details);
        }).catch((err)=>{
            console.log(err);
        })
    }
    var check=true;
    useEffect(()=>{
        getData()
    },[])

    const handleClick=()=>{
        if(contact.length<9 || contact.length>13 ){
            alert("INVALID PHONE NUMBER!!! Please enter a valid number");
        }
        if(!flag==false){
           
        details?.map((elem)=>{
            if(elem.mobile_no == contact){
                console.log(details);
                setFlag(true);
                setName(elem.f_name);
                setId(elem.id);
                setUserExist(true);
                
                
            }
        })}
        if(!userExist){
            alert("NOT A REGISTERED USER!!! Please Sign-Up");
            navigate(`/signup`, { state: { contact} });
        }
        else{
            details?.map((elem)=>{
                if(elem.password == password){
                    navigate("/");
                    check=false;
                }
            })
            if(check)
            alert(`WRONG PASSWORD : "Please fill the right password" or "Click On Forget Password"`);
            
        }
    
    }
    const handleSignup=()=>{
        setSignupFlag(true);
    }
    // I think I am making some error in here>>
    if(signupFlag){
        navigate(`/signup`, { state: { contact} });
    }
    const handleReset=()=>{  
        const {id,f_name} = details.find((elem) => elem.mobile_no === contact);
        if (id) {
            console.log(id);
            navigate(`/changepassword/${f_name}`, { state: { id} });
            // return <ChangePassword id={id}/>
        } else {
            setSignupFlag(true);
        }
        
    }

    return (
    
    <div className='login' >        
        <h1>Welcome:- {flag?name:"Nature Lover"} </h1>
        <input type="text" placeholder='Enter Mobile No' value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
        {flag && <><input type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/></>}
        {contact && <button onClick={handleReset}>Forget Password?</button>}
        <div>
        <button onClick={handleClick}>{flag?"Submit":"Login"}</button>
        <button onClick={handleSignup}>Signup</button>
        </div>     
       
    </div>
   
  )
}

export default LoginPage