import { Product } from "../_model/product.ts";

export class ProductService {
    db: Product[] = [
        {
            id: 1,
            name: 'Appenzeller',
            price: 20,
            sale: 10,
            directory: 'appenzeller.jpg',
        },
        {
            id: 2,
            name: 'Eier',
            price: 20,
            sale: 10,
            directory: 'eier.jpg'
        },
        {
            id: 3,
            name: 'Ice Tea',
            price: 20,
            sale: 10,
            directory: 'icedtea.jpg'
        },
        {
            id: 4,
            name: 'Kalbswurst',
            price: 20,
            sale: 10,
            directory: 'kalbsbratwuerste.jpg'
        },
        {
            id: 5,
            name: 'Krustenkranz',
            price: 20,
            sale: 10,
            directory: 'krustenkranz.jpg'
        },
        {
            id: 6,
            name: 'Nektarinen',
            price: 20,
            sale: 10,
            directory: 'nektarinen.jpg'
        },
        {
            id: 7,
            name: 'Olivenöl',
            price: 20,
            sale: 10,
            directory: 'olivenoel.jpg'
        },
        {
            id: 8,
            name: 'Senf',
            price: 20,
            sale: 10,
            directory: 'senf.jpg'
        },
        {
            id: 9,
            name: 'Tomaten',
            price: 20,
            sale: 10,
            directory: 'tomaten.jpg'
        },
        {
            id: 10,
            name: 'Vaniell Glace',
            price: 20,
            sale: 10,
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