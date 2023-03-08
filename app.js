const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")
require("dotenv").config()

// middlware
app.use(express.static("./public"))
app.use(express.json())

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App")
})

app.use("/api/v1/tasks", tasks)

// We will have following routes in our app
// app.get('/api/v1/tasks')         - get all the task
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

const port = 5000

// If connected to DB then only start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
