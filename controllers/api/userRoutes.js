const router = require('express').Router();
const { User } = require('../../models');

router.get("/", async (req, res) => { 
  try { 
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(userData);
  } catch (err) {res.status(500).json(err) }
})

router.get("/:id", async (req, res) => { 

})


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: `${req.body.username} is not a valid username` });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  try {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
      } else {
        res.status(404).end();
      }
  } catch (err) {res.status(500).end() }

  
});

router.post('/signup', async (req, res) => {
  try {
    if (req.body.username === undefined) {
      res.status(400).json({ message: `username is invalid` });
      return;
    }
    if (req.body.password === undefined || req.body.password.length < 8) {
      res.status(400).json({ message: `password is invalid` });
      return;
    }
    if (req.body.email === undefined) {
      res.status(400).json({ message: `email is invalid` });
      return;
    }

    // check if the username exists
    const userDataByUsername = await User.findOne({ where: { username: req.body.username } });
    if (userDataByUsername) {
      res.status(400).json({ message: `${req.body.username} has already been registered ` });
      return;
    }

    // check the email address if exists
    const userDataByEmail = await User.findOne({ where: { email: req.body.email } });
    if (userDataByEmail) {
      res.status(400).json({ message: `${req.body.email} has already been registered ` });
      return;
    }

    User.create({
      username: req.body.username,
      name: req.body.username,
      password: req.body.password,
      email: req.body.email,
    })
    res.status(200).json({ message: `${req.body.username} is created successfully ` });
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;
