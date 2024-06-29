import { useState } from "react";
import axios from "axios";

import TextBox from "./components/textBox";
import useFetch from "./ToDoService";
import TaskList from "./components/taskList";

const ToDoContainer = () => {
  const {
    data: tasks,
    loading,
    error,
    setData: setTasks,
  } = useFetch("http://localhost:8001/tasks");
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddItem = async (newItem) => {
    const response = await axios.post("http://localhost:8001/tasks", newItem);
    setTasks([...tasks, response.data]);
  };

  const handleDeleteItems = async () => {
    const deletePromises = selectedTasks.map((task) =>
      axios.delete(`http://localhost:8001/tasks/${task.id}`)
    );

    Promise.all(deletePromises)
      .then(() => {
        const updatedTasks = tasks.filter(
          (task) => !selectedTasks.includes(task)
        );
        setTasks(updatedTasks);
        setSelectedTasks([]);
      })
      .catch((error) => console.error("Error deleting items:", error));
  };

  const handleEditItem = (updatedItem) => {
    axios
      .put(`http://localhost:8001/tasks/${updatedItem.id}`, updatedItem)
      .then((response) => {
        const updatedTasks = tasks.map((task) =>
          task.id === updatedItem.id ? response.data : task
        );
        setTasks(updatedTasks);
        setEditingTask(null);
      })
      .catch((error) => console.error("Error updating item:", error));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <TextBox
        handleAddItem={handleAddItem}
        handleEditItem={handleEditItem}
        editingTask={editingTask}
      />
      <TaskList
        tasks={tasks}
        selectedTasks={selectedTasks}
        setSelectedTasks={setSelectedTasks}
        handleDeleteItems={handleDeleteItems}
        setEditingTask={setEditingTask}
      />
    </div>
  );
};

export default ToDoContainer;
