import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function TaskForm() {
  const postData = async () => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify({
        title: Title.trim(),
        description: Description.trim(),
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (res.status === 401) {
      toast.error("Unauthorized User");
      navigate("/login");
    }

    if (res.status === 201)
      toast.success("New Task Added Successfully...", { autoClose: 1000 });

    setTitle("");
    setDescription("");
  };

  const navigate = useNavigate();

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const handleSubmit = () => {
    if (Title.trim() === "" || Description.trim() === "") {
      toast.error("Please fill all details...", { autoClose: 1000 });
    } else {
      postData();
    }
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          className="btn btn-danger"
          onClick={() => {
            navigate("/login");
            localStorage.removeItem("token");
          }}
        >
          Logout
        </button>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "150px",
            border: "5px solid black",
            marginLeft: "400px",
            marginRight: "400px",
            padding: "20px",
            borderRadius: "20px",
            backgroundColor: "lightblue",
          }}
        >
          <h3 className="fw-bold" style={{ backgroundColor: "lightblue" }}>
            Task Management
          </h3>
          <input
            style={{ width: "300px", padding: "10px", marginBottom: "20px" }}
            className="form-control"
            placeholder="Title"
            value={Title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <input
            style={{ width: "300px", padding: "10px", marginBottom: "20px" }}
            className="form-control"
            placeholder="Description"
            value={Description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Add Task
          </button>
          <button
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
            onClick={() => navigate("/tasklist")}
          >
            Show Task List
          </button>
        </div>
      </div>
    </>
  );
}
export default TaskForm;
