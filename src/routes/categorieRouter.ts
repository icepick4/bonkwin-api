import express, { Request, Response } from 'express';
import categories from '../data/categorie.data';

const categorieRouter = express.Router();

categorieRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json(categories);
});

export default categorieRouter;
