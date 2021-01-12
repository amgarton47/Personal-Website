const express = require("express");
const path = require("path");
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 4747;

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

router.get("/", (res,req,next) => {
    res.send(index.html)
})
app.use(router);

app.listen(PORT, console.log(`App is running on port ${PORT}`))