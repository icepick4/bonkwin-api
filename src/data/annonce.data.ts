import { Annonce } from '../types/annonce';

const annonces: Annonce[] = [
    {
        id: 1,
        title: 'Annonce 1',
        description: "Description de l'annonce 1",
        prix: 100,
        userId: 1,
        commentaires: [
            {
                userName: 'John Doe',
                content: 'Commentaire 1'
            },
            {
                userName: 'Jane Doe',
                content: 'Commentaire 2'
            }
        ],
        categories: [
            {
                name: 'Catégorie 1'
            },
            {
                name: 'Catégorie 2'
            }
        ]
    },
    {
        id: 2,
        title: 'Annonce 2',
        description: "Description de l'annonce 2",
        prix: 200,
        userId: 2,
        commentaires: [
            {
                userName: 'John Doe',
                content: 'Commentaire 3'
            },
            {
                userName: 'Jane Doe',
                content: 'Commentaire 4'
            }
        ],
        categories: [
            {
                name: 'Catégorie 3'
            },
            {
                name: 'Catégorie 4'
            }
        ]
    }
];

export default annonces;
