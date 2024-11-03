import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UserData = () => {
  const [inputs,setInputs]= useState({})
  function handleSubmit(){
    console.log(inputs)

  }
  function handleinput(e){
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    // console.log(value)
    setInputs({...inputs,[name]:value})
  }
  function handleform(e){
    e.preventDefault()

  }




 return (
    <div className="container p-3 bg-black mt-3">
      <form className="d-flex justify-content-center align-items-center flex-column" onSubmit={handleform}>
        <label htmlFor="username">Username</label>
        <input type="text" name="name" value={inputs.name||""} onChange={handleinput} placeholder="enter name" />
        <label htmlFor="EmailAddress">EmailAddress</label>
        <input type="text" name="email" value={inputs.email||""} onChange={handleinput} placeholder="enter email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={inputs.password||""} onChange={handleinput} placeholder="enter password" />
        <Button  className="p-1 m-3" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserData;
