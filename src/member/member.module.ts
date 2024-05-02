import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Member } from '../member/member.entity.ts'

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  exports: [TypeOrmModule],
})
export class MemberModule {}
