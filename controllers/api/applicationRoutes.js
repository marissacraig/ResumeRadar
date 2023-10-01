const router = require('express').Router();
const { Application } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new application
router.post('/', async (req, res) => {
  try {
    const jobData = await Job.create({
      title: req.body.jobTitle,
      company: req.body.jobCompany,
      description: req.body.description,
      salary: req.body.salary,
      location:req.body.location,
      url: req.body.url
    });

    const applicationData = await Application.create({

    })
  }
})

module.exports = router;
