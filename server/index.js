const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// app.use(express.static("./server"));

// routes
const chatsRoute = require("./routes/chats");
const messagesRoute = require("./routes/messages");
const userRoute = require("./routes/user");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/chats", chatsRoute);
app.use("/messages", messagesRoute);
app.use("/user/:id", userRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));
