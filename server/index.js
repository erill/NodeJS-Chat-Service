import { createServer } from "./createServer.js";

const app = createServer();
const port = process.env.PORT || 5000;
app.listen(port);