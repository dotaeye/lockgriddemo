module.exports = function(sequelize, DataTypes) {
  var GridInfo = sequelize.define(
    'GridInfo',
    {
      pid: {
        type: DataTypes.STRING(128)
      },
      status: {
        type: DataTypes.INTEGER,
        comment: '商品状态，有4个状态。0: 可用;1：锁定;  2：已下单; 3：已售卖'
      },
      gnumber: {
        type: DataTypes.INTEGER,
        comment: '商品编号，目前支持4*4个即可。编号从0-15；'
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        comment: '商品价格'
      },
      weight: {
        type: DataTypes.DECIMAL(10, 2),
        comment: '商品重量'
      },
      lockedtime: {
        type: DataTypes.DATE,
        comment: '锁定的时候，app会传递锁定时间戳过来。'
      }
    },
    {
      tableName: 'GridInfo',
      comments: '商品锁定面板'
    }
  )

  return GridInfo
}
