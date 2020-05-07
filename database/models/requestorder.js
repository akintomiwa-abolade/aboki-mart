'use strict';
module.exports = (sequelize, DataTypes) => {
  const RequestOrder = sequelize.define('RequestOrder', {
    buyer_id: DataTypes.INTEGER,
    currency_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  RequestOrder.associate = function(models) {
    // associations can be defined here
  };
  return RequestOrder;
};