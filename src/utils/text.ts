/**
 * @returns a random key
 */
export const generateRandomKey = () => window.crypto.randomUUID().split('-').join('')
