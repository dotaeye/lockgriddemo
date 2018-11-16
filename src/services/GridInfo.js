import { GridInfo } from '../models'
import moment from 'moment'
import config from '../config'

export const getGridInfos = async () => {
  const grids = await GridInfo.findAll()
  return grids
}

export const changeGridStatus = async (gnumbers, status) => {
  await GridInfo.update(
    {
      status: status,
      lockedtime: null
    },
    {
      where: {
        gnumber: { $in: gnumbers }
      }
    }
  )
  return await getGridInfos()
}

export const lockGrids = async gnumbers => {
  await GridInfo.update(
    {
      lockedtime: moment()
        .add(60 * 15, 's')
        .format('YYYY-MM-DD hh:mm:ss'),
      status: 1
    },
    {
      where: {
        gnumber: { $in: gnumbers }
      }
    }
  )
  return await getGridInfos()
}

export const unlockGrids = async gnumbers => {
  await GridInfo.update(
    {
      lockedtime: null,
      status: 0
    },
    {
      where: {
        gnumber: { $in: gnumbers }
      }
    }
  )
  return await getGridInfos()
}
