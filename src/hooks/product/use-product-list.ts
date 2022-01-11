import { useEffect, useMemo } from 'react'
import { useUrlParams } from '../common'
import { getProductListEvent } from '../../models/product/events'

export function useProductList() {
  const {urlData} = useUrlParams()
  const page = useMemo(() => {
    return urlData?.page ? Number(urlData?.page) : 1
  }, [urlData?.page])
  const size = useMemo(() => {
    return urlData?.size ? Number(urlData?.size) : 15
  }, [urlData?.size])
  const searchText = useMemo(() => {
    return urlData?.search || ''
  }, [urlData?.search])


  useEffect(() => {
    let timeout: NodeJS.Timeout
    timeout = setTimeout(() => {
      getProductListEvent({
        page: page - 1,
        size
      })
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  }, [page, size])

  return {
    page,
    size,
    searchText
  }
}