import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';
import { BootcampModule } from './bootcamp/bootcamp.module';
@Module({
  imports: [UserModule,
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
    type:'postgres',
    url : process.env.DATABASE_URL,
    autoLoadEntities:true,
    synchronize:true
  }),
    BootcampModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
