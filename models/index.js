const User = require('./User');
const Job = require('./Job');
const Application = require('./Application');

User.hasMany(Application, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
User.hasMany(Job, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
Job.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
});
Application.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Application, Job };
