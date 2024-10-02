import {BrowserRouter, Route, Routes}  from 'react-router-dom'
import Navbar from './components/Navbar'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='container mx-auto'>
        <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/tasks/new" element={<TaskForm/>}/>
          {/*TODO:falta editar*/}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

