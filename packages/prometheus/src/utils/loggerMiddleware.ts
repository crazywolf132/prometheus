/**
 * We are just making a sexy little logger middleware for hono.
 * We just don't think theirs is as sexy as what ours can be.
 */

import type { NextFunction, Request, Response } from 'express';
import log from 'volog';

/**
 * Custom middleware that logs the request method and path.
 * @returns A middleware function that logs the request method and path.
 */
export const logMiddleware = () => (req: Request, _: Response, next: NextFunction) => {
    // Getting the method from the request
    const {method} = req;
    // Getting the requesting url
    const path = req.originalUrl
    // Setting the scope for the logger.
    log.settings.scope = 'SERVER'
    
    // Starting a timer for the request.
    const start = Date.now();
    // Allowing the request to fulfil
    next();
    // Logging the request now it is complete, along with how long it took in milliseconds.
    log.info(`${path}`, 'method', method, 'time', `${Date.now() - start}ms`);
}