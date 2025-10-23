import { PrismaService } from "@Database/prisma/prisma.service.js";
import { UserApiController } from "@Http/Apis/userApi.controller.js";
import { Module } from "@nestjs/common";
import { PrismaUserRepo } from "@Repos/Prisma/userPrisma.repo.js";
import { CreateUserCase } from "@UseCases/Users/create-user.case.js";
import { DeleteUserCase } from "@UseCases/Users/delete-user.case.js";
import { FindUserCase } from "@UseCases/Users/get-user.case.js";
import { ListUsersCase } from "@UseCases/Users/list-users.case.js";
import { UpdateUserCase } from "@UseCases/Users/update-user.case.js";

console.log('UserApiController ref in module:', UserApiController);

@Module({
  controllers: [UserApiController],
  providers: [
    PrismaUserRepo,
    { provide: "UserRepository", useExisting: PrismaUserRepo },
    CreateUserCase,
    ListUsersCase,
    DeleteUserCase,
    FindUserCase,
    UpdateUserCase
  ],
})
export class UserModule {
  constructor(){
    console.log('✅ UserModule loaded with providers');
  }

}
