import { router as userRouter } from "./user";

function route(app) {
    app.use('/user', userRouter)
}

export { route }