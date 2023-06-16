/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1.1.2
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
 * The Oauth SDK module.
 * @module SDK/Oauth
 * @version 1.1.2
 */
declare class BaseStore {
    private data;
    constructor();
    getItem(key: string): string | undefined;
    get length(): number;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    clear(): void;
}
export default BaseStore;
