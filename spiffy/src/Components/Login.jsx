import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate ,useLocation} from "react-router-dom";
import SignUp from './SignUp';
import './Styles/Login.css';
import Navbar from './Navbar';


const LoginPage = () => {
    // const location=useLocation();
    // // console.log(location.state);
    const [contact,setContact]=useState("");
    // if(location.state) {
    //     setContact(location.state.contact);
    // }
    
    
    const [password,setPassword]=useState("");
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [details,setDetails]=useState([]);
    const [flag,setFlag]=useState(false);
    const [userExist,setUserExist]=useState(false);
    const [signupFlag,setSignupFlag]=useState(false);
    const [key,setKey]=useState(false);

    const navigate=useNavigate();

    const getData=async()=>{
        await axios.get("http://localhost:3000/logs").then(await function (res){
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
        else if(flag==false){     
            const elem=details.find((elem)=> elem.mobile_no==contact);
            if(elem){
                    setFlag(true);
                    setName(elem.f_name);
                    setId(elem.id);
                    setKey(true);
                    setUserExist(true); 
            }else{
                alert("NOT A REGISTERED USER!!! Redirecting to Sign-Up...");
                navigate(`/signup`, { state: { contact} });
            }
        }else{
            const elem=details.find((elem)=> elem.mobile_no==contact);
            if(elem.password == password){
                console.log(elem);

                    setName(elem.name)
                    navigate("/",{state:{name}});
                    
            }else          
                alert(`WRONG PASSWORD : "Please fil the right password" or "Click On Forget Password"`);
            
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
        const {id,f_name} = details.find((elem) => elem.mobile_no === contact) || {};
        if (id) {
            console.log(id);
            navigate(`/changepassword/${f_name}`, { state: { id} });
        } else {
            if(id)
                setSignupFlag(true);
            else
                alert("INVALID PHONE NUMBER!!! Please enter a valid number");
        }
        
    }

    return (
     <>
        <Navbar/>
    <div className="mainLogin" >
       
    <div className='login' >        
        <h1 style={{ fontFamily: "'Fasthand', 'cursive'" ,fontSize:"40px",margin:"-2px"}}>Welcome:- {flag?name:"Nature Lover"} </h1>
        <input type="number" placeholder='🔒Enter Mobile No' value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
        {flag && <><input type="password" placeholder='🔑Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/></>}
        {contact.length>=9 && contact.length<=13 && <button onClick={handleReset}>Forget Password?</button>}
        <div>
        <button onClick={handleClick}>{flag?"Submit":"Login"}</button>
        <button onClick={handleSignup}>Signup</button>
        </div>     
       
    </div>
    </div>
    </>
  )
}

export default LoginPage