const router = require('express').Router();
const { Application } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new application
router.post('/', async (req, res) => {
  try {
    const applicationData = await Application.create({
      title: req.body.title,
      company: req.body.company,
      status: req.body.status,
      location: req.body.location,
      url: req.body.url,
      description: req.body.description,
      salary: req.body.salary,
      user_id: req.session.user_id,
    });

    res.status(200).json(applicationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
