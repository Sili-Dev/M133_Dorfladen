import { Product } from "../_model/product.ts";

export class ProductService {
    db: Product[] = [
        {
            id: 1,
            name: 'Appenzeller',
            price: 20,
            sale: 10,
            directory: '../assets/appenzeller.jpg',
        },
        {
            id: 2,
            name: 'Eier',
            price: 20,
            sale: 10,
            directory: '../assets/eier.jpg'
        },
        {
            id: 3,
            name: 'Ice Tea',
            price: 20,
            sale: 10,
            directory: '../assets/icedtea.jpg'
        },
        {
            id: 4,
            name: 'Kalbswurst',
            price: 20,
            sale: 10,
            directory: '../assets/kalbsbratwuerste.jpg'
        },
        {
            id: 5,
            name: 'Krustenkranz',
            price: 20,
            sale: 10,
            directory: '../assets/krustenkranz.jpg'
        },
        {
            id: 6,
            name: 'Nektarinen',
            price: 20,
            sale: 10,
            directory: '../assets/nektarinen.jpg'
        },
        {
            id: 7,
            name: 'Olivenöl',
            price: 20,
            sale: 10,
            directory: '../assets/olivenoel.jpg'
        },
        {
            id: 8,
            name: 'Senf',
            price: 20,
            sale: 10,
            directory: '../assets/senf.jpg'
        },
        {
            id: 9,
            name: 'Tomaten',
            price: 20,
            sale: 10,
            directory: '../assets/tomaten.jpg'
        },
        {
            id: 10,
            name: 'Vaniell Glace',
            price: 20,
            sale: 10,
            directory: '../assets/vanille_glace.jpg'
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