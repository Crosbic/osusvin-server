import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MemberController } from './member/member.controller'
import { TypeOrm } from './TypeORM'
import { MemberService } from './member/member.service'
import { MemberModule } from './member/member.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...TypeOrm, autoLoadEntities: true }), MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
