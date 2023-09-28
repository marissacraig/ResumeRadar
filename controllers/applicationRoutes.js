const router = require('express').Router();
const { Application, User, Job } = require('../models');
const withAuth = require('../utils/auth');

// GET application details page by id

// GET edit application by id

// GET new application
router.get('/new', withAuth, async (req, res) => {
  res.render('newApplication');
});

module.exports = router;