import { Injectable } from "@nestjs/common";
import { CreateMemberDto } from "./dto/create-members.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Member } from "./entity/members.entity";
import { Repository } from "typeorm";


@Injectable()
export class MemberService{
	constructor(
		@InjectRepository(Member)
		private readonly members: Repository<Member>
	){}

	async getAll(): Promise<Member[]> {
		return this.members.find()
	}

	// getById(id: number){
	// 	return this.members.find(el => el.id === id)
	// }

	// create(memberDto: CreateMemberDto){
	// 	this.members.push({
	// 		...memberDto,
	// 		id: Date.now().toString()
	// 	}
			
	// 	)
	// }
}