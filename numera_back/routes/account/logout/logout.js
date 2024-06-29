const express = require("express");
const router = express.Router();

router.post("/", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.status(200).send({ message: 'Successfully logged out' });
    });
  });
});

module.exports = router;
