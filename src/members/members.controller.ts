import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { CreateMemberDto } from './dto/create-members.dto'
import { UpdateMemberDto } from './dto/update-members.dto'
import { MemberService } from './member.service'

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('all')
  getAll() {
    return this.memberService.getAll()
  }

  // @Get(':id')
  // getById(@Param('id') id: number) {
  //   return this.memberService.getById(id)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return 'Remove ' + id
  // }
}
