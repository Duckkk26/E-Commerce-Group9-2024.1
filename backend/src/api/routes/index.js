import { router as orderRouter } from "./order";
import { router as userRouter } from "./user";
import { router as payRouter } from './pay'
import { router as addressRouter } from "./address";

function route(app) {
    app.use('/user', userRouter)
    app.use('/order', orderRouter)
    app.use('/pay', payRouter)
    app.use('/address', addressRouter)
}

export { route }