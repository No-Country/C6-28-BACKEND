import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // 
    message:"maximo numero de intentos excedido",
    standardHeaders: true,
    legacyHeaders:false
});

