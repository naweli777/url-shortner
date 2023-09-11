const express = require('express');
const urlRoute = require('./routes/url')
const app = express();
const connectDb = require('./db/db')

const PORT = 8001;

app.use(express.json());
connectDb();
app.use('/url',urlRoute)
app.listen(PORT, ()=>{
    console.log(`Server has started on port ${PORT}`);
})