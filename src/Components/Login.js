import React, { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userName: userName, password: password });
    if (userName == "test@desaisiv.com" && password == "P@ssw0rd") {
      // swal("You Have Sucess Login");
      navigate('employees');
    } else {
      swal("You have Entered Wronge Values");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <legend>Login Form</legend>

        <input
          placeholder="UserName"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
          id="fname"
          name="fname"
        />
        <br />

        <input
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          id="password"
          name="password"
        />
        <br />
        <button type="submit">Login</button>

      </form>
    </>
  );
}
