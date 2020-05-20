/**
 * 将查询字符串分解为对象
 *
 * @param {string} query
 * @returns {interface}
 */
export function parseQuery(query?: string): object;

/**
 * 使给定字符串每个单词首字母大写
 * @param {string} s
 * @returns {string}
 */
export function capitalize(s: string): string;

/**
 * 判断一个字符串是否为 Base64 字符串
 *
 * @param {string} s
 * @returns {boolean}
 */
export function isBase64(s: string): boolean;
