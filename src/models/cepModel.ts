import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm'

@Entity('cep')
class Cep {
  
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  cep: string

}

export default Cep
