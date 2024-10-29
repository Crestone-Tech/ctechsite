import express, { Request, Response } from "express";
import path from "path";
import session, { SessionOptions } from "express-session";

import connectSessionSequelize from "connect-session-sequelize";
// import sequelize from "./config/connection";
// import routes from "./controllers";
// import { logDBConnectionDetails } from "./utils/environment-helper";

const SequelizeStore = connectSessionSequelize(session.Store);

const app: express.Express = express();
const PORT = process.env.PORT || 3002;

// const sess: SessionOptions = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, "public")));

// CORS middleware adds CORS headers to calls,
// without which the calls from the client port (5173)
// are rejected by the server (on 3001)
// app.use(cors());
// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
// call helper function to log DB variables used in connection
//   logDBConnectionDetails();
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
// });
