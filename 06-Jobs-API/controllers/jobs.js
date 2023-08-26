const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, notFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userID }).sort("createdAt");
  res.json({ jobs, count: count.length });
};
const getJobs = async (req, res) => {
  res.send("get jobs");
};
const createJob = async (req, res) => {
  // req.body.createdBy = req.user.userID;
  // const job = await Job.create(req.body);
  // res.status(StatusCodes.CREATED).json({ job });
  req.body.createdBy = req.user.userID;
  const job = await Job.create(req.body);
  res.json({ job });
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
