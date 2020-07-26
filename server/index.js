import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 5000;

app.use("/", routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// if (!module.parent){ 
//   app.listen(port); 
// }

app.listen(port);
export default app;
