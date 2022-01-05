import {Router} from 'https://deno.land/x/oak/mod.ts';
import { User } from "./_model/user.ts";
import { ProductService } from "./_service/product.service.ts";
import { UserService } from "./_service/user.service.ts";

const router = new Router();

const userService = new UserService();
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

router.get('/user/:email', ctx => {
    const email: string = ctx.params.email!;
    ctx.response.headers.set('Content-Type', 'application/json');
    ctx.response.body = userService.signIn(email);
});

router.get('/user', ctx => {
    ctx.response.headers.set('Content-Type', 'application/json');
    ctx.response.body = userService.getCurrentUser();
});

router.put('/user', async ctx => {
    ctx.response.headers.set('Content-Type', 'application/json');
    const userToUpdate: User = JSON.parse(await ctx.request.body().value);
    ctx.response.body = userService.updateUser(userToUpdate);
});

router.get('/images/:productname', async ctx => {
    const productname: string = ctx.params.productname!;
    const img = await Deno.readFile('backend/assets/' + productname);
    ctx.response.headers.set('content-type', 'image/jpg');
    ctx.response.body = img;
})

export default router;
