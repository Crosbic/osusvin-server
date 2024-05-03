import { Controller, Get } from '@nestjs/common'

import { MemberService } from './members.service'

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
