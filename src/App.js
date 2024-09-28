import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

const App =() =>{

  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30 pm',
      remainder: true,
    },
    {
      id: 2,
      text: 'meeting at school',
      day: 'Feb 6th at 1:30 pm',
      remainder: true,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30 pm',
      remainder: false,
    }
  ])
  
  //Delete task
  const deleteTask =(id) => {
    setTasks(tasks.filter((task)=> task.id !=
  id))
  }

  // Toggle Reminder 
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task) =>
       task.id === id ? {...task, reminder: 
        !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header/>
      <AddTask/>
      {tasks.length > 0 ?  <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/> :
       ('No Tasks To Show') }
    </div>
  );
}

export default App;
