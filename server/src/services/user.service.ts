import { UserCreateDto } from "../types/dto/user-create.dto";
import { mongoDataSource } from "../db";
import { User } from "../db/entities/user";
import bcrypt from "bcryptjs";
import { UserLoginDto } from "../types/dto/user-login.dto";
import { ObjectID } from "mongodb";
class UserService {
  userRepository = mongoDataSource.getRepository<User>(User);
  async createUser(dto: UserCreateDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: dto.email },
    });
    if (existingUser) throw new Error("User with this email exists!");
    const { password, ...user } = dto;
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User(user.email, hashedPassword, user.bio);
    return this.userRepository.save(newUser);
  }

  async loginUser(dto: UserLoginDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: dto.email },
    });
    const isPasswordsMatch = await bcrypt.compare(
      dto.password,
      existingUser?.password || ""
    );
    if (!existingUser || !isPasswordsMatch) {
      throw new Error("Incorrect data!");
    }
    return existingUser;
  }

  async getUserById(id: string): Promise<Omit<User, "password">> {
    const { password, ...user } = await this.userRepository.findOneOrFail({
      where: { _id: new ObjectID(id) },
    });
    return user;
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
export const userService = new UserService();
