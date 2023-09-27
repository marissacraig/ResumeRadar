const router = require('express').Router();
const { Application, User, Job } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('layouts/main', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Load dashboard displaying all of logged in user's applications
router.get('/dashboard', async (req, res) => {
  try {
    const applicationData = await Application.findAll({
      // where: {
      //   user_id: req.session.user_id
      // },
      include: [
        {
          model: Job,
        }
      ]
    });

    const applications = applicationData.map((application) => application.get({ plain: true }));

    res.render('dashboard', {
      applications,
      logged_in: req.session.logged_in,
      layout: false
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {})

// Load signup page
router.get('/signup', async (req, res) => {})


module.exports = router;