import React from 'react'

export default function Card({title, description, id, handleDelete, navigate}) {
  return (
    <div className="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 flex justify-between">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
        <div>
          <button 
            type="button"
            className="rounded bg-cyan-600 px-6 pb-2 pt-2.5"
            onClick={()=> navigate(`/tasks/${id}/edit`)}
          >
            Edit
          </button>
          <button
            type="button"
            className="rounded bg-red-700 px-6 pb-2 ml-2 pt-2.5"
            onClick={()=>handleDelete(id)}
            >
            Delete
          </button>
        </div>
        
    </div>
  )
}


