const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());

//simple middleware

app.use((req, res, next)=> {
    console.log("HTTP METHOD - " +req.method + "-url " + req.url);
    next();
})

const mongoose = require("mongoose");
mongoose
    .connect(
        "mongodb+srv://admin:admin@cluster0.6maczeq.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(5000, () => {
            console.log("server started");
        });
    })
    .catch((error) => {
        console.log(error);
    });
app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
    res.send("Hello");
});
