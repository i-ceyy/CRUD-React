//index.js is the entry point
import express from "express"; // backend framework for node js
import cors from "cors"; //enable apps to fetch data from a server in different origins, coz usually the request is denied
import session from "express-session";  //
import dotenv from "dotenv"; //loads environtment variable from .env into process.env
import db from "./config/Database.js"; //used the very first  time to create tables on db
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie:{
        secure: 'auto'
    }
}));
app.use(cors({
    credentials : true,
    origin: 'http://localhost:3000' // domain that was enabled to access our API, in this case is our frontend
}));

app.use(express.json()); //enabling us to recieved data in json form
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

// store.sync(); //creating table session
app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running ...');
});