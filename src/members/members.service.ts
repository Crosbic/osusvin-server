import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateMemberDto } from './dto/create-members.dto'
import { Members } from './entities/members.entity'

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Members)
    private readonly members: Repository<Members>
  ) {}

  async getAll(): Promise<Members[]> {
    return this.members.find()
  }

  async getById(id: number): Promise<Members | null> {
    return this.members.findOneBy({ id })
  }

  async createMember(memberDto: CreateMemberDto): Promise<Members> {
    return this.members.save(memberDto)
  }
}
