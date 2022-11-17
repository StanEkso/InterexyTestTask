import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

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
