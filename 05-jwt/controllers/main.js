const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const id = new Date().getDate();
  const token = jwt.sign(
    {
      username,
      id,
    },
    "fsdfg",
    { expiresIn: "30d" }
  );

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "fsdfg");
  } catch (error) {
    
  }
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: "Hello , John Doe",
    secret: `Here is your lucky no. ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
