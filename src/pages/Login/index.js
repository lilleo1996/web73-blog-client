import { useState } from "react";
import axios from "axios";

import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { username, password };

    axios
      .post("http://localhost:3001/users/login", user)
      .then((response) => {
        const { data, token } = response.data;
        login(data, token);
        setUsername("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="username">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <div className="password">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            value={password} //"music,student"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
