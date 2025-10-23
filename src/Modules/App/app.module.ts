import { DatabaseModule } from "@Database/database.module.js";
import { ConfigModule } from "@nestjs/config";
import { WebConfigModule } from "./webApp.module.js";
import { UserModule } from "@Modules/Users/user.module.js";
import { AppConfig } from "@Config/config.service.js";
import { Module } from "@nestjs/common";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    DatabaseModule,
    WebConfigModule,
    UserModule,
  ],
  controllers: [],
  providers: [AppConfig],
  exports: [AppConfig],
})
export class AppModule {
  constructor() {
    console.log("App Module Iniciado correctamente");
  }
}
