import express, { Request, Response } from 'express';
import annonces from '../data/annonce.data';
import { Annonce } from '../types/annonce';

const annonceRouter = express.Router();

annonceRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json(annonces);
});

annonceRouter.post('/:id', (req: Request, res: Response) => {
    const annonce: Annonce = req.body;

    if (annonce) {
        annonces.push(annonce);
        res.status(201).json(annonce);
    }
});

annonceRouter.get('/:id', (req: Request, res: Response) => {
    const annonceId: number = parseInt(req.params.id);
    const annonce: Annonce | undefined = annonces.find(
        (a) => a.id === annonceId
    );

    if (annonce !== undefined) {
        res.status(200).json(annonce);
    } else {
        res.status(404).json({
            message: 'Annonce not found'
        });
    }
});

annonceRouter.delete('/:id', (req: Request, res: Response) => {
    const annonceId: number = parseInt(req.params.id);
    const annonce: Annonce | undefined = annonces.find(
        (a) => a.id === annonceId
    );
    const userId = req.body.userId;

    if (annonce !== undefined) {
        if (annonce.userId === userId) {
            annonces.splice(annonces.indexOf(annonce), 1);
            res.status(200).json(annonce);
        } else {
            res.status(401).json({
                message: 'Unauthorized'
            });
        }
    } else {
        res.status(404).json({
            message: 'Annonce not found'
        });
    }
});

export default annonceRouter;
