import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login as loginService } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const user = loginService(username, password);

    if (!user) {

      setError("Invalid username or password.");

      return;

    }

    login(user);

    switch (user.role) {

      case "administrator":
        navigate("/");
        break;

      case "organization":
        navigate("/organization-dashboard");
        break;

      case "project":
        navigate("/project-dashboard");
        break;

      case "program":
        navigate("/program-dashboard");
        break;

      case "field":
        navigate("/field-dashboard");
        break;

      case "savingagent":
        navigate("/saving-agent-dashboard");
        break;

      case "me":
        navigate("/me-dashboard");
        break;

      default:
        navigate("/unauthorized");

    }

  };

  return (

    <div className="login-page">

      <h1>VillageLink MIS</h1>

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">

          Login

        </button>

      </form>

      <p style={{color:"red"}}>

        {error}

      </p>

    </div>

  );

}

export default Login;