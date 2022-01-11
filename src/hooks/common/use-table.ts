import { useCallback } from 'react'
import { useUrlParams } from './use-url-params'
import { useLocation, useNavigate } from 'react-router-dom'

export function useTable() {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const {urlData} = useUrlParams()

  const page = urlData['page']

  const size = urlData['size']
  const onPageChange = useCallback((p) => {
    const url: string[] = []
    if (size) {
      url.push(`size=${size}`)
    }
    if (p !== 1) {
      url.push(`page=${p}`)
    }
    navigate({
      pathname,
      search: url.join('&'),
    })
  }, [navigate, pathname, size])

  const onPageSizeChange = useCallback((p, size) => {
    const url: string[] = []
    if (page) {
      url.push(`page=${page}`)
    }
    url.push(`size=${size}`)

    navigate({
      pathname,
      search: url.join('&'),
    })
  }, [navigate, page, pathname])

  const onSearch = useCallback((value: string) => {
    const url: string[] = []
    if (page) {
      url.push(`page=${page}`)
    }

    if (size) {
      url.push(`size=${size}`)
    }
    if(value.length > 0) {
      url.push(`search=${value}`)
    }
    navigate({
      pathname,
      search: url.join('&')
    })
  }, [navigate, page, pathname, size])

  return {
    onPageSizeChange,
    onPageChange,
    onSearch
  }
}