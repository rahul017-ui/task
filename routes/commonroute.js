const router = require("express").Router();
const taskRoute = require("../routes/task");

const userRoute = require("../routes/User");

router.use("/api/v1/users", userRoute )
router.use("/api/v1/tasks", taskRoute)


module.exports = router;