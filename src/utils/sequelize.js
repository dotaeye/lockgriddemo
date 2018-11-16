var models = require('../models')
const createMigration = modelName => {
  return {
    up: function(queryInterface, Sequelize) {
      return queryInterface
        .createTable(
          models[modelName].tableName,
          models[modelName].attributes,
          models[modelName].options
        )
        .then(() => {
          let indexes = models[modelName].options.indexes || []
          indexes.forEach(n => {
            queryInterface.addIndex(models[modelName].tableName, n.fields, {
              indexType: n.method
            })
          })
        })
    },
    down: function(queryInterface, Sequelize) {
      return queryInterface.dropTable(models.User.tableName)
    }
  }
}

module.exports = {
  createMigration
}
