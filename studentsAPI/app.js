const express = require("express");
const student_router = require("./routers/students");
const app = express();

app.use(express.json());
app.use('/api/students', student_router);

app.listen(3000, () => {
    console.log("Server started !");
})