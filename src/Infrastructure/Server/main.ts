import 'reflect-metadata';
import { NestFactory } from "@nestjs/core";
import { AppConfig } from "@Config/config.service";
import { ConfigureApp } from "@Config/app.config";
import { labels } from "@Utils/Labels";
import { AppModule } from "@Modules/App/app.module";

const main = async() => {
    try{
        const app = await NestFactory.create(AppModule);
        const config = app.get(AppConfig);

        ConfigureApp(app);

      await app.listen(config.port);
    }catch(error){
       console.error(labels.errors.serverOn, error);
    }
}

main();