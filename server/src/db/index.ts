import { DataSource } from "typeorm";
import { User } from "./entities/user";

export const mongoDataSource = new DataSource({
  type: "mongodb",
  url: "mongodb+srv://eksodev:Aa12345678@cluster0.syctrpt.mongodb.net/?retryWrites=true&w=majority",
  entities: [User],
  synchronize: true,
});

mongoDataSource.initialize();
