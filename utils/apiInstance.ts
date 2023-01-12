import axios, { AxiosRequestConfig } from 'axios'

const API_URL = 'http://127.0.0.1:9000/api/v1'

function getContentType(config?: AxiosRequestConfig<unknown>) {
  const contentType: Record<string, string> =
    (config?.method ?? '').toUpperCase() === 'DELETE'
      ? {}
      : { 'Content-Type': 'application/json' }
  return contentType
}

/**
 * to call api with token that automatically returns the JSON
 *
 * @param token Bearer token
 * @param config AxiosRequestConfig
 * @param baseURL Additional base url options
 */

export function apiInstance(
  token?: string | null,
  config?: AxiosRequestConfig<unknown>,
  baseURL = API_URL
) {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      ...getContentType(config),
      Authorization: `Bearer ${token}`,
    },
    ...config,
  })

  return axiosInstance
}
