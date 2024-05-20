/* eslint-disable prettier/prettier */
import { Router } from 'express'
import { loginController,registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController) // ` ~ ` la thu muc src

usersRouter.post('/register', registerValidator, registerController) 

export default usersRouter