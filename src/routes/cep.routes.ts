import { Request, Response, Router } from 'express'
import { getRepository } from 'typeorm'
import Cep from '../models/cepModel'
import CreateCepService from '../services/createCepService'
import VerifyCepService from '../services/verifyCepService'

const cepRouter = Router()

cepRouter.post('/', async (request: Request, response: Response) => {
  try {
    const createService = new CreateCepService()
    const cepCreated = await createService.execute(request.body)

    return response.json(cepCreated)

  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})
cepRouter.get('/verify/:cep', async (request: Request, response: Response) => {
  const { cep } = request.params
  const verifyCep = new VerifyCepService()
  const cepCreated = await verifyCep.execute(cep)
  return response.json(cepCreated);
})
cepRouter.get('/', async (request: Request, response: Response) => {
  const getAllRepo = getRepository(Cep);
  const ceps = await getAllRepo.find()
  return response.json(ceps);
})
export default cepRouter
