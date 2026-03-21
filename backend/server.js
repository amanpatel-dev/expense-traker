// these are pakages
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

// middleware setup 
// cors-This enables cross-origin requests. react ka url
// alag hai backend ka alag toh block naa ho request iske liye cors use hota hai 

const transactionRoutes = require("./routes/transactionRoutes");

app.use(cors());

// const bodyParser = require("body-parser");

// app.use(bodyParser.json());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use((req,res,next)=>{
//     console.log(req);
//     next();
// })
app.use("/api/transactions", transactionRoutes);


app.get("/", (req, res) => {
    res.send("Expense Tracker API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});