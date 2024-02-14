const CACHE_KEY_PREFIX = 'appCache_';
const TTL = 1000 * 60 * 60; // 1 hour TTL for cache entries

// Simple utility to check storage availability
export const storageAvailable = (type: string) => {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
/**
 * Fetches data with caching, using localStorage with fallback and error handling.
 * @param {string} url The URL to fetch data from.
 * @returns {Promise<any>} The fetched data.
 */
export const fetchWithCache = (url: string): Promise<any> => {
    const cacheKey = `${CACHE_KEY_PREFIX}${url}`;

    // Attempt to use localStorage if available
    if (storageAvailable('localStorage')) {
        const cached = localStorage.getItem(cacheKey);

        if (cached) {
            const { data, timestamp } = JSON.parse(cached);

            // Check if cache is still valid
            if (Date.now() - timestamp < TTL) {
                return data; // Return cached data
            }
        }
    }

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const newData = await response.json();

        // Only cache if localStorage is available
        if (storageAvailable('localStorage')) {
            // Update cache with the new data
            localStorage.setItem(cacheKey, JSON.stringify({ data: newData, timestamp: Date.now() }));
        }

        return newData;
    } catch (error) {
        console.error('Fetching data failed:', error);
        // Optionally, implement fallback logic here (e.g., return default data)
        throw error; // Rethrow or handle as needed
    }
}

/**
 * Invalidates cache for a specific URL.
 * @param {string} url The URL whose cache to invalidate.
 */
export const invalidateCache = (url: string): void {
    if (storageAvailable('localStorage')) {
        const cacheKey = `${CACHE_KEY_PREFIX}${url}`;
        localStorage.removeItem(cacheKey);
    }
}