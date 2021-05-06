import CepRepository from '../repositories/cepRepositories'
import { getCustomRepository } from 'typeorm'
interface Cep {
  cep: string;
  cidade: string;
  complemento: string
  bairro: string
  uf: string
  rua: string
}
class InsertCepService {
  public async execute({ cep, cidade, complemento, bairro, uf, rua }: Cep) {
    const cepRepository = getCustomRepository(CepRepository)

    const findOneCep = await cepRepository.findIfCreated(cep);

    if (findOneCep) {
      throw Error('Cep ja foi cadastrado')
    }
    const cepSafe = cepRepository.create({ cep, cidade, complemento, bairro, uf, rua })
    await cepRepository.save(cepSafe)

    return cepSafe
  }
}

export default InsertCepService




