import { router as orderRouter } from "./order";
import { router as userRouter } from "./user";
import { router as payRouter } from './pay'

function route(app) {
    app.use('/user', userRouter)
    app.use('/order', orderRouter)
    app.use('/pay', payRouter)
}

export { route }