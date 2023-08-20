const getAllJobs = async (req, res) => {
  res.send("get All jobs");
};
const getJobs = async (req, res) => {
  res.send("get jobs");
};
const createJob = async (req, res) => {
  res.json(req.user);
};
const updateJob = async (req, res) => {
  res.send("update jobs");
};
const deleteJob = async (req, res) => {
  res.send("delete jobs");
};

module.exports = {
  getAllJobs,
  getJobs,
  deleteJob,
  updateJob,
  createJob,
};
