const pool = require ("../db.js")

const getAllTasks = async (req, res, next) =>{
   try {
    const allTasks = await pool.query('SELECT * FROM task')
    //console.log(allTasks)
    res.json(allTasks.rows)
   } catch (error) {
        next(error)
   }
}

const getTask = async(req, res, next)=> {
    //TODO:validar que sea entero o un dato valido en la BD
    try {
        const {id} = req.params
    
        const result = await pool.query('SELECT * FROM task WHERE id = $1', [id])

        if (result.rows.length === 0) 
            return res.status(404).json({message: 'Task not Found.'})

        res.json(result.rows[0])
    } catch (error) {
        next(error)        
    }
}

const createTask = async (req, res, next)=>{
    //TODO: Validar que venga bien el objeto
    const { title, description} = req.body

    try {
        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1,$2) RETURNING *', [title, description])

        console.log(result)
    
        res.json(result.rows[0])
        //res.send("Creando una tarea")
    } catch (error) {
        //console.log(error.message)
        //TODO: eviar un error 500
        //res.json( {error: error.message})
        next(error)
    }
}

const deleteTask = async(req, res, next) =>{
    const {id} = req.params

    try {
        const result = await pool.query("DELETE FROM task WHERE id = $1 RETURNING *", [id])

        if (result.rowCount === 0)
            return res.status(404).json({message: 'Task not Found.'})
    
    
        res.sendStatus(204)
    } catch (error) {
        next(error)
    }
}

const updateTask = async (req, res, next)=> {
    const {id} = req.params
    const {title, description} = req.body

   /*  const result = await pool.query("UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *", [title, description, id])
        if (result.rows.length === 0)
            return res.status(404).json({
        message: "Task not Found."})
        console.log(result)
        return res.json(result.rows[0]) */

    try {
        const result = await pool.query("UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *", [title, description, id])
        if (result.rows.length === 0)
            return res.status(404).json({
        message: "Task not Found."})
        console.log(result)
        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    } 
} 

module.exports = {
    getAllTasks, getTask, createTask, deleteTask, updateTask
}