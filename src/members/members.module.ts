import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Members } from './entities/members.entity'
import { MemberService } from './members.service'
import { MemberController } from './members.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Members])],
  providers: [MemberService],
  controllers: [MemberController],
  exports: [TypeOrmModule, MemberService],
})
export class MemberModule {}
