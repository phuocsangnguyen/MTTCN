/* eslint-disable prettier/prettier */
import express from 'express'
import usersRouter from '~/routers/user.routes'
const app = express()
const port = 3000
app.use(express.json())
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})