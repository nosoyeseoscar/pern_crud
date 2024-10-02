import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const URL = 'http://localhost:4000/tasks'

export default function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        setLoading(true)

        try {
            const res = await fetch(URL, {
                method: "POST",
                body: JSON.stringify(task),
                headers: {'Content-Type':'application/json'}
            })
    
            //const data = await res.json()
            setLoading(false)
            navigate('/')
        } catch (error) {
            console.log(error.message);
        } 
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        //console.log( name, value);
        setTask({...task, [name]: value})
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="space-y-12">
            <div className="border-b border-white-900/10 p-12">
                <h2 className="text-2xl font-semibold leading-7 text-gray-100">Task</h2>
                <p className="mt-1 text-sm leading-6 text-gray-300">
                    Here you can create or modify a task.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-300">
                            Title
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="New Task"
                                    autoComplete="title"
                                    className="block flex-1 rounded-md border-0 py-1.5 pl-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-300">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                rows={4}
                                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-300">Write a few sentences about yourself.</p>
                    </div>
                    
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        disabled={!task.description || !task.title}
                        className="rounded-md bg-indigo-600 px-8
                         py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                       { loading ? <Spinner/>: "Save"}
                        
                    </button>
                </div>
            </div>
        </div>
    </form>
  )
}
