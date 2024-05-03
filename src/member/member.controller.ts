import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { CreateMemberDto } from './dto/create-member.dto'
import { UpdateMemberDto } from './dto/update-member.dto'

@Controller('member')
export class MemberController {
  @Get()
  getAll() {
    return 'getAll'
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return 'id is ' + id
  }

  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return `Username: ${createMemberDto.username}, rank: ${createMemberDto.rank}`
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return 'Remove ' + id
  }
  @Put(':id')
  update(@Body() updateMemberDto: UpdateMemberDto, @Param('id') id: number) {
    return 'Update ' + updateMemberDto + ' with id: ' + id
  }
}
