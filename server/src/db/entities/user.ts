import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: string;

  @PrimaryColumn()
  _id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  bio: string;

  constructor(email: string, password: string, bio: string) {
    this.email = email;
    this.password = password;
    this.bio = bio;
  }
}
