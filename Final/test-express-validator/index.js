const express = require('express')
const { query,validationResult, matchedData } = require('express-validator')
const app = express()

app.use(express.json())
app.get('/hello',query('person')
.notEmpty()
.withMessage('person query khong duoc de trong')
.escape(),
(req,res) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        const data = matchedData(req)
        console.log(data)
        return res.send(`Hello,${req.query.person}!`)
    }
    
    res.status(400).json({errors: errors.array()})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})  