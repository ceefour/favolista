'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListHead = sequelize.define('ListHead', {
    name: DataTypes.STRING,
  }, {
    // don't add timestamp attributes (createdAt, updatedAt)
    timestamps: false,
    underscored: true,
    tableName: 'list_head'
  });
  ListHead.associate = function(models) {
    // associations can be defined here
  };
  return ListHead;
};