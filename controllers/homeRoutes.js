const router = require('express').Router();
const { Application, User, Job } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('homepage', {
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
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Load signup page
router.get('/signup', async (req, res) => {})

//Load login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
