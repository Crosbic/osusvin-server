import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
    nullable: false,
  })
  avatarUrl: string

  @Column({
    nullable: false
  })
  flag_url: string;

  @Column({
    unique: true,
    nullable: false,
  })
  username: string

  @Column({
    nullable: false
  })
  pp: number;

  @Column({
    unique: true,
    nullable: false,
  })
  rank: number;

  @Column({
    type: "real",
    nullable: false
  })
  accuracy: number;
}
