import { router as productRouter } from './product.js'
import { router as brandRouter } from './brand.js';
import { router as cartRouter } from './cart.js';
import { router as userRouter } from "./user";

function route(app) {
    app.use('/product', productRouter);
    app.use('/brand', brandRouter);
    app.use('/cart', cartRouter)
    app.use('/user', userRouter)
}