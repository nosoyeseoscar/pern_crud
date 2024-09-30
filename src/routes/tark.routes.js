const { Router } = require('express')
const { getAllTasks, getTask, createTask, deleteTask, updateTask} = require('../controllers/task.controller.js')

const router = Router()

router.get("/", (req, res) =>{
    res.send("Hola mundo")
})

router.get("/tasks", getAllTasks)

router.get("/tasks/:id", getTask)

router.post("/tasks", createTask)

router.delete("/tasks/:id", deleteTask)

router.put("/tasks/:id", updateTask)


module.exports = router