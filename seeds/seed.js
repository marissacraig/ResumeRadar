const sequelize = require('../config/connection');
const { User, Application } = require('../models');

const userData = require('./userData.json');
const applicationData= require('./applicationData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const application = await Application.bulkCreate(applicationData, {
    individualHooks: true,
    returning:true,
  });
  
};

seedDatabase();
