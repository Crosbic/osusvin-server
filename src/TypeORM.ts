import 'dotenv/config'

import { DataSourceOptions } from 'typeorm'
export const TypeOrm: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  port: +process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  entities: ['./*.entity.{ts,js}'],
}
