import { UserCreateDto } from "../controllers/dto/user-create.dto";
import { mongoDataSource } from "../db";
import { User } from "../db/entities/user";
import bcrypt from "bcryptjs";
import { UserLoginDto } from "../controllers/dto/user-login.dto";
class UserService {
  userRepository = mongoDataSource.getRepository<User>(User);
  async createUser(dto: UserCreateDto): Promise<User> {
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
}
export const userService = new UserService();
