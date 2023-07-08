import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./Styles/Login.css"
const SignUp = () => {
  const location = useLocation();
  // const {contact}=location.state;
  const [details, setDetails] = useState([]);

  const [contact, setContact] = useState(location.state.contact);
  const [password, setPassword] = useState("");
  const [sec, setSec] = useState("");
  const [f_name, setFName] = useState("");
  const [l_name, setLName] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    await axios.get("http://localhost:3000/logs").then(await function (res) {
      setDetails(res.data);
      // console.log(details);
    }).catch((err) => {
      console.log(err);
    })
  }



  const setData = async () => {
    if(f_name&&
      l_name &&
      contact&&
      password){
    const data = {
      f_name,
      l_name,
      mobile_no: contact,
      password
    }
    await axios.post(`http://localhost:3000/logs`, data)
      .then(await function (response) {
        console.log(response);
        navigate("/", { state: { data } })
      })
      .catch(function (error) {
        console.log("hsdfghj");
      });
  }else{
    alert("MISSING SOME FIELDS!!! Al fields are required");
  }
}

  const handleSignup = async () => {

    const elem = details.find((elem) => elem.mobile_no == contact);
    

    if (elem) {
      
      
      alert("ALREADY A USER!!! Redirecting to LoginPage");
      navigate("/login");
    }
    if (password != sec) {
      
      alert("Password Mismatch!!! Please re-enter the password");
    } else {
      setData();
    }
  }

  return (

    <>
      <div className="mainLogin" >
      <div className='signup'>
        <h1 style={{ fontFamily: "'Fasthand', 'cursive'", fontSize: "40px", margin: "-2px" }}>SignUp</h1>
        <input type="text" placeholder='Enter your First Name' value={f_name} onChange={(e) => { setFName(e.target.value) }} />
        <input type="text" placeholder='Enter your Last Name' value={l_name} onChange={(e) => { setLName(e.target.value) }} />
        <input type="text" placeholder='Enter your Mobile No.' value={contact} onChange={(e) => { setContact(e.target.value) }} />
        <input type="password" placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
        <input type="password" placeholder='Confirm password' value={sec} onChange={(e) => { setSec(e.target.value) }} />
        <button onClick={handleSignup} >Create Account</button>


        </div>
      </div>
          </>

  )
}

export default SignUp