import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { AppConfig } from "@Config/config.service.js";
import { ConfigureApp } from "@Config/app.config.js";
import { labels } from "../Utils/Labels.js";

/*
async function main () {
    const app = await NestFactory.create(AppModule);
    await app.listen(5000);
}
*/

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