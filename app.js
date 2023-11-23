const express = require("express");
const dotenv = require("dotenv");
const postsRouter = require("./routers/posts");

const app = express();
const port = 3000;

dotenv.config();

// application/json
app.use(express.json());

// router
app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log(`App attiva su http://localhost:${port}`);
})