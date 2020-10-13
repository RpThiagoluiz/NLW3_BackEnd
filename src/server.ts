import express, { request } from 'express'
import './database/connection'
import routes from './routes'

const app = express();

app.use(express.json())
app.use(routes)


app.listen(3333); //acessar o app localhost:3333

/*
   !*rota = conjunto
   !* recurso  = usuario
   !* metodos HTTP = get, put, delete,post
      get = buscar uma informacao( lista, itens...)
      post = criando uma informacao
      put = editando uma informacao
      delete = deletando uma informacao

   !* Parametros
      Query Params= http://localhost:3333/user?search=thiago ---*realizando uma busca dentro da aplicacao- ali foi a rota,  depois a pesquisa.
      Route Params = http://localhost:3333/user/1 ---*(indentificar um recurso) - identificador do usuario, no caso o usuario de id 1.
      Body Params = http://localhost:3333/user (informacaoes mais, complexas, endereco, email, telefone.)


      app.get('/users', (request, response) => {
         return response.json({message: 'Hello World'})
      })




   app.post('/users/:id', (request, response) => {
      console.log(request.query);
      console.log(request.params);
   })
   ** requisicao de um parametro, *! o `:` indica q é um parametro.



   ** request, front-end para o back-end
   ** response, back-end para o front-end

*/