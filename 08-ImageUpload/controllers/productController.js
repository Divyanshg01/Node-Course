const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProducts = async (req, res) => {
  res.send("create Products");
};

const getAllProducts = async (req, res) => {
  res.send("create Products");
};

module.exports = {
  createProducts,
  getAllProducts,
};
