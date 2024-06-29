// import { useState } from "react";
// import TextBox from "./textBox";
// import TaskList from "./taskList";
// import useFetch from "../useFetch";
// import axios from 'axios';


// const Container = () => {
//   const { data: tasks, loading, error, setData: setTasks } = useFetch('http://localhost:8001/tasks');
//   const [selectedTasks, setSelectedTasks] = useState([]);

  
//     const handleAddItem = (newItem) => {
//       axios.post('http://localhost:8001/tasks', newItem)
//         .then(response => {
//           setTasks([...tasks, response.data]);
//         })
//         .catch(error => console.error('Error adding item:', error));
//     };

//     const handleDeleteItems = () => {
//       const deletePromises = selectedTasks.map(task => 
//         axios.delete(`http://localhost:8001/tasks/${task.id}`)
//       );

//       Promise.all(deletePromises)
//       .then(() => {
//         const updatedTasks = tasks.filter(task => !selectedTasks.includes(task));
//         setTasks(updatedTasks);
//         setSelectedTasks([]);
//       })
//       .catch(error => console.error('Error deleting items:', error));
//   };


//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;


//     return(
//         <div>
//             <TextBox handleAddItem={handleAddItem} />
//       <TaskList
//         tasks={tasks}
//         selectedTasks={selectedTasks}
//         setSelectedTasks={setSelectedTasks}
//         handleDeleteItems={handleDeleteItems}
//       />
//         </div>

//     );
// }

// export default Container;