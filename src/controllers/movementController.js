const movementService = require("../services/movementService");

async function getMovements(req, res, next) {
  try {
    const movements = await movementService.getMovements(req.query);
    res.json(movements);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getMovements,
};