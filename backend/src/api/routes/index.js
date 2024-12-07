import { router as productRouter } from './product.js'
import { router as brandRouter } from './brand.js';
import { router as cartRouter } from './cart.js';
import { router as orderRouter } from "./order";
import { router as userRouter } from "./user";
import { router as payRouter } from './pay'
import { router as addressRouter } from "./address";

function route(app) {
    app.use('/product', productRouter);
    app.use('/brand', brandRouter);
    app.use('/cart', cartRouter)
    app.use('/user', userRouter)
    app.use('/order', orderRouter)
    app.use('/pay', payRouter)
    app.use('/address', addressRouter)
}