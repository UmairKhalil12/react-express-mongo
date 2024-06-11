const express = require("express");
const path = require("path");


const app = express();
app.use(express.static(path.join(__dirname, 'public/stylesheet')));

app.get("/", (res, req) => {
    req.sendFile(path.join(__dirname , '../../src/index.js'))
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})
