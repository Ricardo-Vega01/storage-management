import type { INestApplication } from "@nestjs/common";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { cors } from "./cors.config.js";

function ConfigureApp(app: INestApplication){
    // Config to protect request http
    app.use(helmet());
    // Config cors param
    app.enableCors(cors)
    // Cookies 
    app.use(cookieParser())
}

export {ConfigureApp}