const todotask = require("../model/task");

// Get All tasks
const gettasks = async (req, res) => {

  try {
    const task = await todotask.find();
    res.json(task);
  } catch (error) {
    res.json({ message: error });
  }
};

// Single task
const gettask = async (req, res) => {
  try {
    const user = await todotask.findById(req.params.taskId);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};

// Add New task
const createtask = async (req, res) => {
    
   try {
    const task = new todotask({
    // user_id: req.params.id,

      pincode: req.body.pincode,
      task: req.body.task,
    });
    console.log(req.body);
    const savedtask = await task.save();
    res.send(savedtask);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update task
const updatetask = async (req, res) => {
  try {
    const task = {
      pincode: req.body.pincode,
      task: req.body.task,
    };

    const updatedtask = await todotask.findByIdAndUpdate(
      { _id: req.params.taskId },
      task
    );
    res.json(updatedtask);
  } catch (error) {
    res.json({ message: error });
  }
};

// Delete product
const deletetask = async (req, res) => {
  try {
    const removetask = await todotask.findByIdAndDelete(req.params.Id);
    res.json(removetask);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  updatetask,
  createtask,
  gettask,
  gettasks,
  deletetask,
};
