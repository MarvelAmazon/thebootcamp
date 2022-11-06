import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Person, StudentAccount, TeacherAccount, EnterpriseAccount } from './model';

@Module({
    imports: [TypeOrmModule.forFeature([User,Person,StudentAccount,TeacherAccount,EnterpriseAccount])]
})
export class UserModule {}
