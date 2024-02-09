import crypto from 'crypto';
import type { NextFunction, Request, Response } from 'express';

// The cache entry type.
interface CacheEntry {
    sha: string;
    code: string;
}

// Super simple cache server for the sha middleware.
const cache: Record<string, CacheEntry> = {};

/**
 * This middleware is used to add a SHA to the response of the server.
 * This is used to help with caching and updating the nanoapps.
 * This SHA can be used by the client to check if the nanoapp has been updated.
 * 
 * @param req The request object.
 * @param res The response object.
 * @param next The next function.
 */
export const shaMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // Storing the original json function.
    const originalJson = res.json.bind(res);

    // Overwriting the json function.
    res.json = (data: any) => {
        // Extracting the URL from the request.
        const url = req.originalUrl;
        let sha: string | undefined;

        // Check if the response fo this URL is cache
        if (cache[url] && cache[url].code === data.code) {
            // We found a cache entry, so we are going to use that.
            sha = cache[url].sha
        } else {
            // No cache was found, so we are going to create a new one.
            const hash = crypto.createHash('sha256');
            hash.update(data.code);
            sha = hash.digest('hex')!;

            // Update the cache
            cache[url] = { sha, code: data.code }
        }

        // add SHA to the response
        data.sha = sha;
        // Using the original json function to send the response.
        return originalJson(data);
    }

    // Continue to the next middleware.
    next();
}