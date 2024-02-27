import React, { useState } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MessageHeader, Message } from "semantic-ui-react";
function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    axios
      .post(
        "https://backend-portfolio-bxkp.onrender.com/api/admin/login",
        loginData
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("isAdmin", res.data.isAdmin ? "true" : "false");

        // localStorage.setItem("isAdmin", res.data.data.isAdmin);
        // localStorage.setItem("token", res.data.data.token);
        // localStorage.setItem("isBanned", res.data.data.isBanned);
        // localStorage.setItem("id", res.data.data.id);
        setTimeout(() => {
          setLoading(false);
          navigate("/dashboard");
        }, 2000);
      })
      .catch((err) => {
        console.dir(err);
        setLoading(false);
        let errorMessage = "An error occurred while processing your request.";

        if (err.response && err.response.data && err.response.data.error) {
          errorMessage =
            err.response.data.error.message || err.response.data.error;
        }

        setError(errorMessage);
        setTimeout(() => {
          setError("");
        }, 8000);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen width">
      <Form
        size="large"
        className="border-2 border-slate-300 w-[500px] p-12 rounded-2xl md:w-[500px]"
        onChange={(e) => {
          setLoginData({ ...loginData, [e.target.name]: e.target.value });
        }}
      >
        <h1>Login.</h1>
        <Form.Input type="email" name="email" placeholder="Email" />
        <Form.Input
          type={showPass ? "text" : "password"}
          name="password"
          placeholder="Password"
        />
        <Form.Field>
          <Checkbox
            label="Show password"
            onClick={() => {
              setShowPass(!showPass);
            }}
          />
        </Form.Field>
        {error && (
          <Message negative>
            <MessageHeader>OOOPPPS! 🤕</MessageHeader>
            <p>{error}</p>
          </Message>
        )}

        <Button
          onClick={() => {
            handleLogin();
          }}
          loading={loading}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
