const userService = require("../services/userService");

async function getUsers(req, res, next) {
  try {
    const users = await userService.getUsers(
      req.query,
      req.headers.authorization
    );

    res.json(users);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers,
};