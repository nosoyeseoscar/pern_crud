import { useEffect, useState } from "react"
import Card from './Card';
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:4000/tasks"

export default function TaskList() {

    const [tasks, setTasks] = useState([])

    const navigate = useNavigate()

    const loadTasks = async ()=> {
        const res = await fetch(URL)
        const data = await res.json()
        setTasks(data)
        //console.log(data);
        
    }

    const handleDelete = async(id)=>{
        try {
            await fetch(`${URL}/${id}`, { 
                method: "DELETE",
            })
            //TODO:validar que el servidor esté arriba
           setTasks( tasks.filter( task => task.id !== id)   )
        } catch (error) {
            console.log(error.message);
        }
        
      }
   
    useEffect(()=>{
        loadTasks()
    }, [])
  return (
    <>
        <h2>Task List</h2>
        <div className="grid grid-cols-1">
            {tasks.map(task => <Card title={task.title} 
            description={task.description} 
            key={task.id} 
            id={task.id} 
            handleDelete={handleDelete}
            navigate={navigate}
        />)}
        </div>
    </>
  )
}
