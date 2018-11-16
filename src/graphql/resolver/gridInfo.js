import { combineResolvers } from 'graphql-resolvers'
import moment from 'moment'
import { isAuthenticated } from '../filter'
import { createPageModel } from '../../utils'

module.exports = {
  Query: {
    getGridInfos: combineResolvers(
      isAuthenticated,
      async (root, data, { services: { GridInfoService } }) => {
        return await GridInfoService.getGridInfos()
      }
    )
  },
  Mutation: {
    changeGridStatus: combineResolvers(
      isAuthenticated,
      async (
        root,
        { input: { gnumbers, status } },
        { services: { GridInfoService }, user }
      ) => {
        return await GridInfoService.changeGridStatus(gnumbers, status)
      }
    ),
    lockGrids: combineResolvers(
      isAuthenticated,
      async (
        root,
        { input: { gnumbers } },
        { services: { GridInfoService }, user }
      ) => {
        return await GridInfoService.lockGrids(gnumbers)
      }
    ),
    unlockGrids: combineResolvers(
      isAuthenticated,
      async (
        root,
        { input: { gnumbers } },
        { services: { GridInfoService }, user }
      ) => {
        return await GridInfoService.unlockGrids(gnumbers)
      }
    )
  },
  GridInfo: {
    locked: async (root, data, context) => {
      if (!root.lockedtime) return false

      return moment(root.lockedtime).isAfter(
        moment().format('YYYY-MM-DD hh:mm:ss')
      )
    },
    price: (root, data, context) => {
      if (!root.price) return 0
      return parseInt(root.price * 100, 10)
    }
  }
}
