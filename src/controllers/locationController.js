const locationService = require("../services/locationService");

async function getLocations(req, res, next) {
  try {
    const locations = await locationService.getLocations(req.query);
    res.json(locations);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getLocations,
};