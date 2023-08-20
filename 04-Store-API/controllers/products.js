const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  //   throw new Error("testing async error");
  const products = await Product.find({ featured: true });

  res.status(200).json({ products, nbhits: products.length });
};
// const search = "a";
const getAllProducts = async (req, res) => {
  // console.log(req.query);
  const { featured, company, name, sort, fields, numericFilters } = req.query;

  const queryObj = {};
  if (featured) {
    queryObj.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObj.company = company;
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObj[field] = {
          [operator]: Number(value),
        };
      }
    });

    console.log(numericFilters);
  }

  let result = await Product.find(queryObj);

  //Sort

  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("creaeAt");
  }

  if (fields) {
    const fieldLsist = fields.split(",").join(" ");
    result = result.select(fieldLsist);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  //23- 7772

  const products = await result;

  res.status(200).json({ products, nbhits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
