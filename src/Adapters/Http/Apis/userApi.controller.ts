import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateUserCase } from "@UseCases/Users/create-user.case.js";
import { DeleteUserCase } from "@UseCases/Users/delete-user.case.js";
import { FindUserCase } from "@UseCases/Users/get-user.case.js";
import { ListUsersCase } from "@UseCases/Users/list-users.case.js";
import { UpdateUserCase } from "@UseCases/Users/update-user.case.js";

@Controller("users")
export class UserApiController {
  constructor(
    private readonly createUser: CreateUserCase,
    private readonly findUserId: FindUserCase,
    private readonly listAll: ListUsersCase,
    private readonly updateUser: UpdateUserCase,
    private readonly deleteUser: DeleteUserCase
  ) {
    console.log("UserApiController constructed =>", {
      createUser: !!createUser,
      findUserId: !!findUserId,
      listAll: !!listAll,
      updateUser: !!updateUser,
      deleteUser: !!deleteUser,
    });
  }

  @Get()
  async findAll() {
    console.log("ListAll instance:", this.listAll);

    return this.listAll.execute();
  }
}

/*
        // Create a new user
        @Post()
        async create(@Body() body: { name: string; email: string }) {
          await this.createUser.execute(body.name, body.email);
          return { message: "User created" };
        }
        // Get user by Id
  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.findUserId.execute(id);
  }

  // Update User Method
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() body: { name: string; email: string }
  ) {
    return this.updateUser.execute(id, body.name, body.email);
  }

  // Delete User
  @Delete(":id")
  async delete(@Param("id") id: string) {
    await this.deleteUser.execute(id);
    return { message: "User Deleted" };
  }
  */
