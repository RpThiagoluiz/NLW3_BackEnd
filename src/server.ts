import express from 'express'

const app = express();

app.get('/users', () => {
   console.log('teste')
})


app.listen(3333); //acessar o app localhost:3333