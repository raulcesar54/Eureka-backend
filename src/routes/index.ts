import { Router } from 'express'
import cepRouter from './cep.routes'

const routes = Router()

routes.use('/cep', cepRouter)

export default routes
