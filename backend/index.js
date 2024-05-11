import express from "express"; // backend framework for node js
import cors from "cors"; //enable apps to fetch data from a server in different origins, coz usually the request is denied
import session from "express-session";  //
import dotenv from "dotenv"; //loads environtment variable from .env into process.env
dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure: 'auto'
    }
}));
app.use(cors({
    credentials : true,
    origin: 'http://localhost:3000' // domain that was enabled to access our API, in this case is our frontend
}));

app.use(express.json()); //enabling us to recieved data in json form

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running ...');
});