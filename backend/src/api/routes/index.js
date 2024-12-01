import { router as productRouter } from './product.js'
import { router as brandRouter } from './brand.js';
import { router as cartRouter } from './cart.js';

function route(app) {
    app.use('/product', productRouter);
    app.use('/brand', brandRouter);
    app.use('/cart', cartRouter)
}

export { route };