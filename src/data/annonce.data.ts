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
    }
];

export default annonces;
