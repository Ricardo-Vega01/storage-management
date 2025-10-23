import { Controller, Get } from "@nestjs/common";

@Controller('/')
export class webController {
    @Get()
    getRoot(): object{
        return {message: '¡Welcome!'}
    }
}