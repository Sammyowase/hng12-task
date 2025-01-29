import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    const response = {
        email: "samuelowase02@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Sammyowase/hng12-task.git"
    };
    res.status(200).json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
