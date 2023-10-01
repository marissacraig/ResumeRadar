const User = require('./User');
const Application = require('./Application');

// one user has many applications
User.hasMany(Application, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
Application.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Application };
