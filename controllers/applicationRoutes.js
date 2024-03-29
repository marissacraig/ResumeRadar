const router = require('express').Router();
const { Application, User } = require('../models');
const withAuth = require('../utils/auth');

// GET new application
router.get('/new', withAuth, async (req, res) => {
  res.render('newApplication');
});

// GET application details page by id
router.get('/:id', withAuth, async (req, res) => {
  try {
    const applicationData = await Application.findByPk(req.params.id);

    if (!applicationData) {
      res.status(404).json({ message: 'No application found with this id!' });
      return;
    }

    const application = applicationData.get({ plain: true });

    res.render('applicationDetails', {
      application, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET edit application by id
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const applicationData = await Application.findByPk(req.params.id);

    if (!applicationData) {
      res.status(404).json({ message: 'No application found with this id!' });
      return;
    }

    const application = applicationData.get({ plain: true });

    res.render('editApplication', {
      application, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;