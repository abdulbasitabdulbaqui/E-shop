import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [loginError, setLoginError] = useState({
    username: "",
    password: "",
  });

  const handleLoginData = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError({
      username: "",
      password: "",
    });
    if (!loginData.username || !loginData.password) {
      setLoginError((prev) => {
        return {
          ...prev,
          username: !loginData.username ? "This field is required" : "",
          password: !loginData.password ? "This field is required" : "",
        };
      });
      return;
    }

    if (loginData.username.length < 7) {
      setLoginError((prev) => {
        return {
          ...prev,
          username: "username should be 7 charachter",
        };
      });
      return;
    }

    if (loginData.username.length > 15) {
      setLoginError((prev) => {
        return {
          ...prev,
          username: "max charachter of username is 15",
        };
      });
      return;
    }

    if (loginData.password.length < 7) {
      setLoginError((prev) => {
        return {
          ...prev,
          password: "password should have min 7 charachter",
        };
      });
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",

        loginData,
      );
      console.log(response);
      alert("Sucessfully Login");
    } catch (error) {
      setLoginError(() => {
        return {
          username: "",
          password: error?.response?.data?.message || "credential Error",
        };
      });
    }
  };
  let navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleSignup = () =>{
    navigate("/signup")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{ height: "600px", width: "100%" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="d-flex justify-content-center col-11 col-sm-10 col-md-8 col-lg-6 col-xl-4 shadow p-3  bg-white rounded shadow-lg ">
          <div className="w-100" style={{ marginTop: "60px" }}>
            <div style={{ textAlign: "center" }}>
              <h1>LOGIN FORM</h1>
            </div>

            <label>User Name:</label>
            <input
              name="username"
              style={{ padding: "10px", width: "90%" }}
              type="text"
              placeholder="Enter Your Name"
              onChange={handleLoginData}
              value={loginData.username}
              className="form-control mb-1 w-100"
            />
            {loginError.username && (
              <p className="text-danger">{loginError.username}</p>
            )}

            <label>Password:</label>
            <input
              name="password"
              style={{ padding: "10px", width: "90%" }}
              type="password"
              placeholder="Enter Your Password"
              onChange={handleLoginData}
              value={loginData.password}
              className="form-control mb-1 w-100"
            />
            
            {loginError.password && (
              <p className="text-danger">{loginError.password}</p>
            )}

            <div>
              <button type="submit" className="btn btn-primary w-100 mt-0">
                SUBMIT
              </button>
            </div>
            <div className="text-center mt-2">
              <p>If you don't have Account</p>
              <Button onClick={handleSignup} type="submit" variant="link">
                signup
              </Button>
            </div>

            <div className="text-center mt-2">
              <Button onClick={handleHome} variant="link">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
