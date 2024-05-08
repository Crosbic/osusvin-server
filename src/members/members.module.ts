import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Member } from './entities/members.entity'
import { MemberService } from './members.service'
import { MemberController } from './members.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  providers: [MemberService],
  controllers: [MemberController],
  exports: [TypeOrmModule, MemberService],
})
export class MemberModule {}
