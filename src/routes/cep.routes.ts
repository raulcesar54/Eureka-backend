import { Request, Response, Router } from 'express'
import CreateCepService from '../services/createCepService'

const cepRouter = Router()

cepRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { cep } = request.body
    const createService = new CreateCepService()
    const cepCreated = await createService.execute(cep)

    return response.json(cepCreated)

  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})
export default cepRouter
