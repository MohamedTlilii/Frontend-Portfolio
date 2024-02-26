import { Button, Form, Checkbox } from "semantic-ui-react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MessageHeader, Message } from "semantic-ui-react";
function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({});
  // register data from the client
  console.log(registerData);
  const [showPass, setShowPass] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleRegister = () => {
    setLoading(true);
    axios
      .post("https://backend-portfolio-bxkp.onrender.com/api/admin/register", registerData)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setMessage("Your account was created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        let errorMessage = "An error occurred while processing your request.";

        if (err.response && err.response.data && err.response.data.error) {
          if (err.response.data.error.email) {
            errorMessage = err.response.data.error.email.message;
          } else {
            errorMessage = err.response.data.error || errorMessage; // Use default message if specific error not available
          }
        }

        setError(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen width">
      <Form
        size="large"
        className="border-2 border-slate-300 w-[500px] p-12 rounded-2xl md:w-[500px]"
        onChange={(e) => {
          setRegisterData({ ...registerData, [e.target.name]: e.target.value });
        }}
      >
        <h1>Register.</h1>
        <Form.Input type="text" name="fullName" placeholder="FullName" />
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
        {message && (
          <Message positive>
            <MessageHeader>{message} 🥳</MessageHeader>
            <p>You wil be redirect to the Login page</p>
          </Message>
        )}
        <Button
          onClick={() => {
            handleRegister();
          }}
          loading={loading}
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
