import { Product } from "../_model/product.ts";

export class ProductService {
    db: Product[] = [
        {
            id: 1,
            name: 'Appenzeller',
            price: 5.10,
            sale: 4.10,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed. At volutpat diam ut venenatis.',
            directory: 'appenzeller.jpg',
        },
        {
            id: 2,
            name: 'Eier',
            price: 2.50,
            sale: 2.00,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed. At volutpat diam ut venenatis.',
            directory: 'eier.jpg'
        },
        {
            id: 3,
            name: 'Ice Tea',
            price: 3.10,
            sale: 2.50,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed. At volutpat diam ut venenatis.',
            directory: 'icedtea.jpg'
        },
        {
            id: 4,
            name: 'Kalbswurst',
            price: 12.10,
            sale: 8.50,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed. At volutpat diam ut venenatis.',
            directory: 'kalbsbratwuerste.jpg'
        },
        {
            id: 5,
            name: 'Krustenkranz',
            price: 5.00,
            sale: 4.20,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed. At volutpat diam ut venenatis.',
            directory: 'krustenkranz.jpg'
        },
        {
            id: 6,
            name: 'Nektarinen',
            price: 2.60,
            sale: 2.10,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed. At volutpat diam ut venenatis.',
            directory: 'nektarinen.jpg'
        },
        {
            id: 7,
            name: 'Olivenöl',
            price: 7.50,
            sale: 6.50,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed. At volutpat diam ut venenatis.',
            directory: 'olivenoel.jpg'
        },
        {
            id: 8,
            name: 'Senf',
            price: 3.50,
            sale: 2.20,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed. At volutpat diam ut venenatis.',
            directory: 'senf.jpg'
        },
        {
            id: 9,
            name: 'Tomaten',
            price: 4.50,
            sale: 3.50,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed. At volutpat diam ut venenatis.',
            directory: 'tomaten.jpg'
        },
        {
            id: 10,
            name: 'Vanille Glace',
            price: 7.00,
            sale: 6.00,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed. At volutpat diam ut venenatis.',
            directory: 'vanille_glace.jpg'
        },
    ];

    getProducts() {
        return this.db;
    }

    getProductById(id: number) {
        for (let product of this.db) {
            if (product.id == id) return product;
        }
        return null;
    }
}