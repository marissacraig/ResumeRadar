const User = require('./User');
const Job = require('./Job');
const Application = require('./Application');

// one user has many applications
User.hasMany(Application, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
Application.belongsTo(User, {
  foreignKey: 'user_id',
});

// one application has one job, one job may have many applications
Application.hasOne(Job, {
  foreignKey: 'user_id',
  onDelete: 'RESTRICT',
});
Job.belongsToMany(Application, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Application, Job };
