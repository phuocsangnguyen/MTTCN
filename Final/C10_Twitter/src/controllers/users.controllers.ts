/* eslint-disable prettier/prettier */
import { Request, Response} from 'express'
import { Result } from 'express-validator'
export const loginController = (req: Request ,res: Response) => {
  const {email, password } = req.body
  if (email == "nguyenphuocsang@gmail.com" && password == "San21@"){
  res.json({
    message: 'Login success'
  })
}

return res.status(400).json({
  error: 'Login failed'
})
}

export const registerController = (req: Request ,res: Response) => {
  const {email, password } = req.body
  if (email == "nguyenphuocsang@gmail.com" && password == "San21@"){
  res.json({
    message: 'Register success'
  })
}

return res.status(400).json({
  error: 'Register failed'
})
}
