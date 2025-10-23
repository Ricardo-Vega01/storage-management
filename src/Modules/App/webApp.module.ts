import { webController } from "@Http//web.controller.js";
import { Module } from "@nestjs/common";

@Module({
    controllers: [webController]
})

export class WebConfigModule {}