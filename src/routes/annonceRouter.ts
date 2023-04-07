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

annonceRouter.post('/:id/commentaire', (req: Request, res: Response) => {
    const annonceId: number = parseInt(req.params.id);
    const annonce: Annonce | undefined = annonces.find(
        (a) => a.id === annonceId
    );

    if (annonce !== undefined) {
        annonce.commentaires.push(req.body);
        res.status(201).json(annonce);
    } else {
        res.status(404).json({
            message: 'Annonce not found'
        });
    }
});

annonceRouter.post('/new', (req: Request, res: Response) => {
    const newAnnonce = req.body;

    if (newAnnonce) {
        annonces.push(newAnnonce);
        res.status(201).json(newAnnonce);
    }
});

annonceRouter.get('/:userId', (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.userId);
    console.log(userId);
    console.log(annonces);
    const userAnnonces: Annonce[] = annonces.filter((a) => a.userId === userId);

    if (userAnnonces.length > 0) {
        res.status(200).json(userAnnonces);
    } else {
        res.status(404).json({
            message: 'No annonce found'
        });
    }
});

annonceRouter.get('/content/:id', (req: Request, res: Response) => {
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

annonceRouter.get('/single/:id', (req: Request, res: Response) => {
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

annonceRouter.get('/new/id', (req: Request, res: Response) => {
    const newId = annonces.length + 1;
    res.status(200).json(newId);
});

annonceRouter.delete('/:id', (req: Request, res: Response) => {
    const annonceId: number = parseInt(req.params.id);
    const annonce: Annonce | undefined = annonces.find(
        (a) => a.id === annonceId
    );

    console.log(annonce);

    if (annonce !== undefined) {
        annonces.splice(annonces.indexOf(annonce), 1);
        res.status(200).json(annonce);
    } else {
        res.status(404).json({
            message: 'Annonce not found'
        });
    }
});

export default annonceRouter;
