
import CepRepository from '../repositories/cepRepositories'
import { getCustomRepository } from 'typeorm'

class verifyCep {
  public async execute(cep: string) {
    const cepRepository = getCustomRepository(CepRepository)

    const findOneCep = await cepRepository.findIfCreated(cep);
    if (!findOneCep) {
      return {message:'cep not created', created:false}
    }else {
      return {info: findOneCep, created:true}
    }

  }
}

export default verifyCep
