import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'

@Entity('cep')
class Cep {
  
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  cep: string

  @Column()
  cidade: string

  @Column()
  complemento: string

  @Column()
  bairro: string

  @Column()
  uf: string

  @Column()
  rua: string

}

export default Cep
