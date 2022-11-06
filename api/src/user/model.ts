
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  phone: string;

  @Column()
  country: string;

  @Column({
    unique: true,
  })
  login: string;

  @Column({
    length: 8,
  })
  password: string;

  @Column()
  isActive: boolean;
}
export enum Gender {
  Unknown = 0,
  Male = 1,
  Female = 2,
}

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  lastname: string;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.Unknown,
  })
  gender: Gender;

  @Column()
  dob: Date;


}

@Entity()
export class StudentAccount extends Person {
  @OneToOne(() => User)
  @JoinColumn()  
  account: User;
}

@Entity()
export class TeacherAccount extends Person {
  
  @OneToOne(() => User)
  @JoinColumn()  
  user: User;
  @Column({unique:true})
  lincense: string;
}

@Entity()
export class EnterpriseAccount {
  @PrimaryGeneratedColumn()
  id: number ;
  @OneToOne(() => User)
  @JoinColumn()
  account: User;
  @Column({
      unique: true
  })
  name: string;
  @Column('json',{
      nullable:false
  })
  domain: [];
  @Column()
  siteUrl: string;
  @Column()
  description: string;
}

