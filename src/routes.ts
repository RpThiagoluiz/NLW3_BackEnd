import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'


const routes = Router();

/*
   <-! Arquitetura - MVC

      *-Model - modelos do banco de dados
      *-Views - como sao vistar pelo front-end
      *-Controllers - logica das rotas


      <--! Padrao do Controllers
         *-index - show - create - update - delete.
*/

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id',OrphanagesController.show)
routes.post('/orphanages', OrphanagesController.create)

export default routes