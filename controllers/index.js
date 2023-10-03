const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const applicationRoutes = require('./applicationRoutes');
const accountRoutes = require('./accountRoutes')

router.use('/', homeRoutes);
router.use('/application', applicationRoutes);
router.use('/api', apiRoutes);

// Return a 404 error response for every HTTP request,
// indicating that the requested resource was not found.
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
