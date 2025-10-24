import { DatabaseModule } from "@Database/database.module";
import { ConfigModule } from "@nestjs/config";
import { WebConfigModule } from "./webApp.module";
import { UserModule } from "@Modules/Users/user.module";
import { AppConfig } from "@Config/config.service";
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
