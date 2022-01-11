import { createEvent } from 'effector'
import { getProductListEffect } from './effects'
import { IListParams } from '../../types/api'

export const getProductListEvent = createEvent<IListParams>()

getProductListEvent.watch(getProductListEffect)