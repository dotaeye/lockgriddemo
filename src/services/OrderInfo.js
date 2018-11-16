import { OrderInfo } from '../models'
import config from '../config'

export const getOrderInfo = async () => {
  const orders = await OrderInfo.findAll()
  return orders
}
