import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class AppConfig {
    constructor(@Inject(ConfigService) private readonly configService: ConfigService){}

    get port():number{
        return this.configService.get<number>('APP_PORT') ?? 5000;
    }
}