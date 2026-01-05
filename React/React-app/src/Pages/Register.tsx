import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const Registeruser = () => {
    fetch("http://localhost:3000/register-page/register", {
      method: "POST",
      body: JSON.stringify({
        username: userName.trim(),
        password: password.trim(),
        email: email.trim(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (
      userName.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      toast.error("Please fill all details...", { autoClose: 1000 });
    } else if (password.length < 6) {
      toast.error("Password must be above 6 characters", { autoClose: 1000 });
    } else if (!email.includes("@")) {
      toast.error("Provide Valid Email ID", { autoClose: 1000 });
    } else {
      toast.success("User Registered Successfully...", { autoClose: 1000 });
      Registeruser();
      navigate("/login");
    }
  };

  return (
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
      <h2 className="fw-bold" style={{ backgroundColor: "lightblue" }}>
        Register
      </h2>
      <input
        placeholder="username"
        className="form-control"
        style={{ width: "300px", padding: "10px", marginBottom: "20px" }}
        value={userName}
        onChange={(e) => setUserName(e.currentTarget.value)}
      ></input>
      <input
        placeholder="password"
        className="form-control"
        style={{ width: "300px", padding: "10px", marginBottom: "20px" }}
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      ></input>

      <input
        placeholder="email"
        className="form-control"
        style={{ width: "300px", padding: "10px", marginBottom: "20px" }}
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      ></input>

      <button
        className="btn btn-primary"
        onClick={() => {
          handleSubmit();
        }}
      >
        Register
      </button>
      <button className="btn btn-link" onClick={() => navigate("/login")}>
        Already have an account? Login
      </button>
    </div>
  );
}

export default Register;
