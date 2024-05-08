import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'

import { MemberService } from './members.service'
import { CreateMemberDto } from './dto/create-members.dto'
import { Member } from './entities/members.entity'

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('all')
  getAll(): Promise<Member[]> {
    console.log("Get method called")
    return this.memberService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Member> {
    return this.memberService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMemberDto: CreateMemberDto): Promise<void>{
    return this.memberService.create(createMemberDto)
  }
}
