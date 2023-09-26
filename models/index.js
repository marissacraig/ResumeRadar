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

// each application associated with one job
Application.hasOne(Job, {
  foreignKey: 'job_id',
  onDelete: 'RESTRICT',
});
Job.belongsTo(Application, {
  foreignKey: 'job_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Application, Job };
