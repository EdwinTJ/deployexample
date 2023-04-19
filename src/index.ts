import express from "express";
import cors from "cors";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!"+ process.env.HELLO);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(3000, () => {
    console.log("Server started on port 3000");
});