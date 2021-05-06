import { EntityRepository, Repository } from 'typeorm'
import Cep from '../models/cepModel'

@EntityRepository(Cep)
class CepRepository extends Repository<Cep> {
  public async findIfCreated(cep: string): Promise<Cep | null> {
    const findCep = await this.findOne({ where: { cep: cep } })
    return findCep || null
  }
}

export default CepRepository
