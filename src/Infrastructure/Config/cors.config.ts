import type { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface.js";

const cors: CorsOptions = {
    origin: ['*'],
    credentials: true
}

export {cors}