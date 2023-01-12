import { useQuery } from '@tanstack/react-query'
import { apiInstance } from '../utils'

export function QueryWrapper(url: string, token?: string) {
  function useQueryGet<K>(queryKey: string) {
    const fetchData = async () => {
      try {
        const res = await apiInstance(token).get(url, {
          params: {
            page: 1,
            size: 10,
            status: 'active',
          },
        })
        return res.data
      } catch (error) {
        throw new Error('Terjadi Kesalahan')
      }
    }

    const { data, isLoading, refetch } = useQuery<K>([queryKey], fetchData)

    return {
      data: data ?? [],
      isLoading,
      refetch,
    }
  }

  return { useQueryGet }
}
