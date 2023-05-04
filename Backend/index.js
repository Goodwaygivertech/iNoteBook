const connectToMongo = require("./db.js");
const express = require('express')
connectToMongo();
const app = express()
const port = 3300;
app.use(express.json());
app.use("/api/auth" , require("./router/auth"));
app.use("/api/notes" , require("./router/note"));
app.get('/', (req, res) => {
    res.send('Hello harry')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});










