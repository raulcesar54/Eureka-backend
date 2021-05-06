import CepRepository from '../repositories/cepRepositories'
import { getCustomRepository } from 'typeorm'

class InserCepService {
  public async execute(cep: string) {
    const cepRepository = getCustomRepository(CepRepository)

    const findOneCep = await cepRepository.findIfCreated(cep);

    if (findOneCep) {
      throw Error('Cep ja foi cadastrado')
    }

    const cepSafe = cepRepository.create({ cep })
    await cepRepository.save(cepSafe)

    return cepSafe
  }
}

export default InserCepService
