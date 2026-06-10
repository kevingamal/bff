const itemService = require("../services/itemService");

async function getItems(req, res, next) {
  try {
    const items = await itemService.getItems(
      req.query,
      req.headers.authorization
    );

    res.json(items);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getItems,
};