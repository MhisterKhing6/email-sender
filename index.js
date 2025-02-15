import express from "express"
import cors from "cors"
import { sendEmail } from "./emailHander.js"
const app = express()
app.use(express.json({limit:"800mb"}))
app.use(cors())


const port = process.env.PORT || 8000;

app.post("/send-email", async (req, res) => {
    let body = req.body
    if(!(body.email && body.phone && body.name && body.message))
            return res.status(400).json({message: "sender email and message required"})
     sendEmail("dondecency11@gmail.com", body)
     return res.status(200).json({"message": "success"})
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})