const express = require("express");
const router = express.Router();
const createError = require("http-errors");

const Task = require("../models/task.model");

router.post("/task", async (req, res, next) => {
  try {
    const { title, body } = req.body;
    const newTask = await Task.create({ title, body });
    if (newTask) res.status(201).json(newTask);
  } catch (error) {
    next(createError(error));
  }
});

router.get("/tasks", async (req, res, next) => {
  try {
    const allTasks = await Task.find();
    res.status(201).json(allTasks);
  } catch (error) {
    next(createError(error));
  }
});

module.exports = router;
