module.exports = function(sequelize, DataTypes) {
  var OrderInfo = sequelize.define(
    'OrderInfo',
    {
      oid: {
        type: DataTypes.STRING(128),
        comment: '订单ID'
      },
      gnumber: {
        type: DataTypes.INTEGER,
        comment: '商品编号，目前支持4*4个即可。编号从0-15；'
      }
    },
    {
      tableName: 'OrderInfo',
      comments: '订单信息'
    }
  )
  return OrderInfo
}
