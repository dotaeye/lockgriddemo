import { combineResolvers } from 'graphql-resolvers'
import { isAuthenticated } from '../filter'
import { createPageModel } from '../../utils'

module.exports = {
  Query: {
    getOrderInfos: combineResolvers(
      isAuthenticated,
      async (root, { id }, { models: { OrderInfo } }) => {
        return await OrderInfo.findAll()
      }
    )
  }
}
