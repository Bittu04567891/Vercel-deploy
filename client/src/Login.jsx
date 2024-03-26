import React, { useState } from "react";
import "./Login.css";

import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/test`, {
        email: email,
        password: password,
      });

      // Assuming your server responds with a success message
      if (response.status === 200) {
        setLogin(true);
      } else {
        // Handle other status codes or error responses
        alert("Login failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Testing,Welcome</h1>

      {!login ? (
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Bittu ,So finally you are here</h1>
        </div>
      )}
    </>
  );
};

export default Login;
