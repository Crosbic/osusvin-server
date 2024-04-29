import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrm } from './TypeORM'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...TypeOrm, autoLoadEntities: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
