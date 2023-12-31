import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate,useLocation} from "react-router-dom";
import { useParams } from "react-router-dom";


const ChangePassword = () => {
    const location=useLocation();
    const {id}=location.state;
    const [first,setFirst]=useState("");
    const [sec,setSec]=useState("");
    const [flag,setFlag]=useState(false);
    const navigate=useNavigate();
    // const {id}=useParams();

    const handleClick=()=>{
        if(first==sec && first!=""){
            postData();

        }
    }
    const postData=async()=>{
        await axios.patch(`http://localhost:3000/logs/${id}`, {            
            password:first
          })
          .then(await function (response) {
            console.log(response);
            setFlag(true);
          })
          .catch(function (error) {
            console.log("error");
          });
          

    }
    if(flag){
         return navigate("/");
    }

  return (
    <div className='mainLogin'>
    <div className='changePassword ' >
    <h1 style={{ fontFamily: "'Fasthand', 'cursive'" ,fontSize:"40px",margin:"-2px"}}>Reset Password</h1>
    {!flag && <><input type="password" placeholder='Enter new password' value={first} onChange={(e)=>{setFirst(e.target.value)}}/>
    <input type="password" placeholder='Confirm new password' value={sec} onChange={(e)=>{setSec(e.target.value)}}/>
    <button onClick={handleClick}>Save Password</button></>}
        
    </div>
    </div>
  )
}

export default ChangePassword