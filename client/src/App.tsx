// import List from "./components/ListComponent";

import { Route, Routes } from "react-router-dom";
import TaskForm from "./components/Task/TaskForm";
import TaskList from "./components/Task/TaskList";
import { ToastContainer } from "react-toastify";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

// import Button from "./components/Button";
function App() {
  // let items = ["Apple", "Banana", "Orange", "Grapes"];

  return (
    <div>
      {/* <List items={items}></List> */}
      {/* <Button ButtonName="My Button"></Button> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<TaskForm />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
