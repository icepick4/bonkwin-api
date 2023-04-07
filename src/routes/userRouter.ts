import express, { Request, Response } from 'express';
import annonces from '../data/annonce.data';
import users from '../data/user.data';
import { User } from '../types/user';

const userRouter = express.Router();

userRouter.post('/register', (req: Request, res: Response) => {
    const user: User = req.body;
    if (user) {
        users.push(user);
        res.status(201).json(user);
    }
});

userRouter.post('/login', (req: Request, res: Response) => {
    const user: User = req.body;
    const userFound: User | undefined = users.find(
        (u) => u.userName === user.userName
    );

    if (userFound !== undefined) {
        res.status(200).json(userFound);
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
});

userRouter.get('/new/id', (req: Request, res: Response) => {
    const newId = users.length + 1;
    res.status(200).json(newId);
});

userRouter.get('/:id', (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.id);
    const user: User | undefined = users.find((u) => u.id === userId);

    if (user !== undefined) {
        res.status(200).json(user);
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
});

userRouter.get('/annonces/:id', (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.id);
    let counter = 0;
    for (let i = 0; i < annonces.length; i++) {
        if (annonces[i].userId === userId) {
            counter++;
        }
    }
    res.status(200).json(counter);
});

userRouter.get('/commentaires/:id', (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.id);
    let counter = 0;
    for (let i = 0; i < annonces.length; i++) {
        if (annonces[i].userId === userId) {
            counter += annonces[i].commentaires.length;
        }
    }
    res.status(200).json(counter);
});

userRouter.put('/edit/:id', (req: Request, res: Response) => {
    const userId: number = parseInt(req.params.id);
    const user: User | undefined = users.find((u) => u.id === userId);

    if (user !== undefined) {
        const updatedUser: User = req.body;

        if (updatedUser) {
            users[users.indexOf(user)] = updatedUser;
            res.status(200).json(updatedUser);
        }
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
});

export default userRouter;
