import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

import { MemberRole } from '../types/MemberRole'

@Entity()
export class Members {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
    nullable: false,
  })
  avatarUrl: string

  @Column({
    nullable: false,
  })
  flag_url: string

  @Column({
    unique: true,
    nullable: false,
  })
  username: string

  @Column({
    nullable: false,
  })
  pp: number

  @Column({
    unique: true,
    nullable: false,
  })
  rank: number

  @Column({
    type: 'real',
    nullable: false,
  })
  accuracy: number

  @Column({
    type: 'enum',
    enum: MemberRole,
    default: MemberRole.USER,
  })
  role: MemberRole
}
