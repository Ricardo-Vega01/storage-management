import { webController } from "@Http//web.controller";
import { Module } from "@nestjs/common";

@Module({
    controllers: [webController]
})

export class WebConfigModule {}