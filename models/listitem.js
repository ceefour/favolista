'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListItem = sequelize.define('ListItem', {
    listHeadId: {type: DataTypes.INTEGER, field: 'list_head_id'},
    position: {type: DataTypes.INTEGER, field: 'position'},
    bodyText: {type: DataTypes.STRING, field: 'body_text'}
  }, {
    // don't add timestamp attributes (createdAt, updatedAt)
    timestamps: false,
    underscored: true,
    tableName: 'list_item'
  });
  ListItem.associate = function(models) {
    // associations can be defined here
  };
  return ListItem;
};