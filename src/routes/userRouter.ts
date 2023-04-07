import express, { Request, Response } from 'express';
import users from '../data/user.data';
import { User } from '../types/user';

const userRouter = express.Router();

userRouter.post('/:id', (req: Request, res: Response) => {
    const user: User = req.body;

    if (user) {
        users.push(user);
        res.status(201).json(user);
    }
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

userRouter.put('/:id', (req: Request, res: Response) => {
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
