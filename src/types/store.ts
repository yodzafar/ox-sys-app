export interface IStoreList<D> {
  page: number
  total_count: number
  items: D,
  loading: boolean,
}