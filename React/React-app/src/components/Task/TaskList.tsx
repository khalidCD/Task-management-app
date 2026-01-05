import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Task } from "../../types/task";
import { toast } from "react-toastify";

function TaskList() {
  const navigate = useNavigate();
  const Data = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    setTableData(await res.json());
  };

  const [tableData, setTableData] = useState<Task[]>([]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <table
        className="table table-bordered"
        style={{
          border: "2px solid black",
          width: "500px",
        }}
      >
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {item.description}
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={async() => {
                       await fetch(`http://localhost:3000/tasks/${item.id}`, {
                        method: "DELETE",
                      });
                      Data();
                      toast.success("Task Deleted Succesfully...",{autoClose:1000})
                    }}
                  ></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Go to Add Task
        </button>
        <button className="btn btn-primary" onClick={() => Data()}>
          Load Data
        </button>
      </div>
    </div>
  );
}
export default TaskList;
