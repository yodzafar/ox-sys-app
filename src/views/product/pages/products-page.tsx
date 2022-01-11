import { Col, Row, Table } from 'antd'
import { IProduct } from '../../../entities/product'
import { useProductList } from '../../../hooks/product'
import { useStore } from 'effector-react'
import { $productModel } from '../../../models/product/stores'
import { ColumnsType } from 'antd/lib/table'
import { useMemo } from 'react'
import { useTable } from '../../../hooks/common/use-table'
import Search from 'antd/es/input/Search'

interface IList extends IProduct {
  key: number
}

export default () => {
  const {page, size, searchText} = useProductList()
  const {onPageChange, onPageSizeChange, onSearch} = useTable()
  const {$productList: {items, loading, total_count}} = useStore($productModel)

  const searchedData = useMemo(() => {
    const search = searchText

    return search.length > 0
      ? items.filter(el => new RegExp(search, 'ig').test(el.name)).sort((a, b) => {
        let re = new RegExp('^' + search, 'i')
        return re.test(a.name) ? re.test(b.name) ? a.name.localeCompare(b.name) : -1 : 1
      })
      : items
  }, [items, searchText])


  const columns: ColumnsType<IList> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => id,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => name,
    },
    {
      title: 'Barcode',
      dataIndex: 'barcode',
      key: 'barcode',
      render: (barcode) => barcode,
    },
    {
      title: 'last Update Time',
      dataIndex: 'lastUpdateTime',
      key: 'lastUpdateTime',
      render: (lastUpdateTime) => lastUpdateTime,
    },
  ]

  return (
    <div className='app'>
      <div className='container'>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Search
              size='large'
              placeholder='Enter product name'
              onChange={e => onSearch(e.target.value)}
              style={{width: 300}}
              value={searchText}
            />
          </Col>
          <Col span={24}>
            <Table<IList>
              dataSource={searchedData.map(item => ({...item, key: item.id}))}
              columns={columns}
              loading={loading}
              pagination={{
                pageSizeOptions: [15, 30, 45, 60],
                onChange: onPageChange,
                current: page,
                total: total_count,
                pageSize: size,
                showLessItems: true,
                onShowSizeChange: onPageSizeChange,
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}