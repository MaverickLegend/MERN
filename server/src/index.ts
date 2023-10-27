import express, { Request, Response } from "express";
import mongoose, { connect } from "mongoose";
import Deck from "./models/Deck";


const app = express();
const PORT = 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});    

mongoose
    .connect("mongodb+srv://mrwho:Eh350OYaLvswA8ja@cluster0.r8z6g63.mongodb.net/?retryWrites=true&w=majority")
    
    .then(() => {
        console.log(`listening on port ${PORT}`)
        app.listen(PORT);
    });


