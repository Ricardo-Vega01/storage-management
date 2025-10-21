
import { AppConfig } from '@Config/config.service.js';
import { DatabaseModule } from '@Database/database.module.js';
import {Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        DatabaseModule
    ],
    controllers: [],
    providers:[AppConfig],
    exports:[AppConfig]
})

export class AppModule {}