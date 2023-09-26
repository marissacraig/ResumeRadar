const sequelize = require('../config/connection');
const { User, Job, Application } = require('../models');

const userData = require('./userData.json');
const jobData = require('./jobData.json')
const applicationData= require('./applicationData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const job = await Job.bulkCreate(jobData, {
    individualHooks: true,
    returning:true,
  })
  const application = await Application.bulkCreate(applicationData, {
    individualHooks: true,
    returning:true,
  })
  
};

seedDatabase();
