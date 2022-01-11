import {useLocation} from 'react-router-dom'
import {useCallback, useEffect, useState} from 'react'

export function useUrlParams(param: string | string[] | null = null) {
  const {search} = useLocation()
  const [urlParams, setUrlParams] = useState<string | null>(null)
  const [urlData, setUrlData] = useState<any>({})

  const generateUrlParams = useCallback(() => {
    const searchParams = new URLSearchParams(search)
    const newUrl: any = {}
    const entries: IterableIterator<[string, string]> = searchParams.entries()
    // @ts-ignore
    for (let pair of entries) {
      newUrl[pair[0]] = pair[1]
    }

    setUrlData(newUrl)

    if (param) {
      if (Array.isArray(param) && param.length > 0) {
        param.forEach(item => searchParams.delete(item))
      }
      if (typeof param === 'string') {
        searchParams.delete(param)
      }
    }

    if (search.trim().length > 0) {
      setUrlParams(searchParams.toString())
    } else {
      setUrlParams(null)
    }

  }, [search, param])


  useEffect(() => {
    generateUrlParams()
  }, [generateUrlParams])

  return {urlData, urlParams}
}