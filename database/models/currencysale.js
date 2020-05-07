'use strict';
module.exports = (sequelize, DataTypes) => {
  const CurrencySale = sequelize.define('CurrencySale', {
    currency_type: DataTypes.STRING,
    rate: DataTypes.DECIMAL,
    seller_id: DataTypes.INTEGER
  }, {});
  CurrencySale.associate = function(models) {
    // associations can be defined here
  };
  return CurrencySale;
};