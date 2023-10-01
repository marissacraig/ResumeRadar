const router = require('express').Router();
const userRoutes = require('./userRoutes');
const applicationRoutes = require('./applicationRoutes');

router.use('/users', userRoutes);
router.use('/applications', applicationRoutes);

module.exports = router;
