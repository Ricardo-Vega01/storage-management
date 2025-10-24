import { DatabaseModule } from "@Database/database.module";
import { UserApiController } from "@Http/Apis/userApi.controller";
import { Module } from "@nestjs/common";
import { PrismaUserRepo } from "@Repos/Prisma/userPrisma.repo";
import { CreateUserCase } from "@UseCases/Users/create-user.case";
import { DeleteUserCase } from "@UseCases/Users/delete-user.case";
import { FindUserCase } from "@UseCases/Users/get-user.case";
import { ListUsersCase } from "@UseCases/Users/list-users.case";
import { UpdateUserCase } from "@UseCases/Users/update-user.case";

@Module({
  imports: [DatabaseModule],
  controllers: [UserApiController],
  providers: [
    // Repository
    PrismaUserRepo,
    { provide: 'UserRepository', useExisting: PrismaUserRepo },
    
    // Use Cases - Simplemente las clases (sin tokens personalizados)
    CreateUserCase,
    ListUsersCase,
    DeleteUserCase,
    FindUserCase,
    UpdateUserCase,
  ],
})
export class UserModule {
  constructor() {
    console.log("✅ UserModule loaded with providers");
  }
}