import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
    nullable: false,
  })
  username: string

  @Column({
    nullable: false,
  })
  avatarUrl: string

  @Column({
    nullable: false,
  })
  rank: number
}
