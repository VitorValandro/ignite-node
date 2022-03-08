import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user_requesting = this.usersRepository.findById(user_id);
    if (!user_requesting.admin) {
      throw new Error("User isn't an admin.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
