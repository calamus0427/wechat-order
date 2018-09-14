/**
 * BASE PER FIX URL
 */
const baseUrl = {
    localhost: 'http://localhost:8080',
    dev: 'http://yapi.demo.qunar.com/mock/16780',
    prod: 'https://www.calamus.xyz/api'
  }
  //
  // export const BASE_PER_FIX_URL = process.env.NODE_ENV === 'production' ? baseUrl.prod : baseUrl.dev
export const BASE_PER_FIX_URL = baseUrl.dev
