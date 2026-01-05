import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const Loginuser = async () => {
    const response = await fetch("http://localhost:3000/login-page", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName.trim(),
        password: password.trim(),
      }),
    });

    const data = await response.json();
    if (data.message === "Login successful") {
      toast.success(data.message, { autoClose: 1000 });
      navigate("/");
    } else {
      toast.error(data.message, { autoClose: 1000 });
    }
  };

  const handleSubmit = () => {
    if (userName.trim() === "" || password.trim() === "") {
      toast.error("Please fill all details...", { autoClose: 1000 });
    } else if (password.length < 6) {
      toast.error("Password must be above 6 characters", {
        autoClose: 1000,
      });
    } else {
      Loginuser();
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "150px",
          border: "5px solid black",
          marginLeft: "450px",
          marginRight: "450px",
          padding: "20px",
          borderRadius: "20px",
          backgroundColor: "lightblue",
        }}
      >
        <h2 className="fw-bold" style={{backgroundColor: "lightblue"}}>Login</h2>

        <input
          placeholder="username"
          className="form-control"
          style={{ width: "300px", padding: "10px", marginBottom: "20px" }}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          className="form-control"
          style={{ width: "300px", padding: "10px", marginBottom: "20px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary" onClick={handleSubmit}>
          Login
        </button>

        <button className="btn btn-link" onClick={() => navigate("/register")}>
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;
