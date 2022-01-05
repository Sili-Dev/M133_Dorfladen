import {Router} from 'https://deno.land/x/oak/mod.ts';
import { ProductService } from "./_service/product.service.ts";

const router = new Router();

const productService = new ProductService();

router.get('/', async (ctx) => {
    
});

router.get('/products', ctx => {
    ctx.response.headers.set('Content-Type', 'application/json');
    ctx.response.body = productService.getProducts();
});

router.get('/products/:id', ctx => {
    const id: number = Number.parseInt(ctx.params.id!);
    ctx.response.headers.set('Content-Type', 'application/json');
    ctx.response.body = productService.getProductById(id);
});

export default router;

