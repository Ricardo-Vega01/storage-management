import type { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

const cors: CorsOptions = {
    origin: ['*'],
    credentials: true
}

export {cors}