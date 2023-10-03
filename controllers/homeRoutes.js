const router = require('express').Router();
const { Application, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const applicationData = await Application.findAll({
      where: {
        user_id: req.session.user_id
      },
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


// Load dashboard displaying all of logged in user's applications
router.get('/dashboard', async (req, res) => {
  try {
    const applicationData = await Application.findAll({
      where: {
        user_id: req.session.user_id
      },
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
router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
})

// Load login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Load Account page
router.get('/account', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        id: req.session.user_id
      }
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    const user = userData.get({ plain: true });

    res.render('account', {
      user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
