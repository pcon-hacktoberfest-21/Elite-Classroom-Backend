require('dotenv').config();
const express = require('express');
const app = express();
const router = require("./api/users/user.router");
const work = require("./api/work/work.router")
const routes = require('./api/router');
app.use(express.json());
app.use('/api', routes);



app.use("/api/users",router);
app.use("/api/work",work);




app.listen(process.env.APP_PORT,()=> {
    console.log("Server up and running on " ,process.env.APP_PORT);
});
