import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common'

import { CreateMemberDto } from './dto/create-members.dto'
import { Members } from './entities/members.entity'
import { MemberService } from './members.service'

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get('all')
  getAll(): Promise<Members[]> {
    return this.memberService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: number): Promise<Members> {
    return this.memberService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createMemberDto: CreateMemberDto): Promise<Members> {
    return this.memberService.createMember(createMemberDto)
  }
}
