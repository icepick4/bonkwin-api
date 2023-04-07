import cors from 'cors';
import express, { Request, Response } from 'express';
import annonceRouter from './routes/annonceRouter';
import categorieRouter from './routes/categorieRouter';
import userRouter from './routes/userRouter';

const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/annonce', annonceRouter);
app.use('/api/categorie', categorieRouter);

app.get('*', (_req: Request, res: Response) => {
    res.status(404).json({
        message: 'Not found'
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
