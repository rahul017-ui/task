const router = require("express").Router();
const taskController = require('../controllers/task');

router.post("/add/:userId", taskController.createtask);

router.get("/gettasklist", taskController.gettasks);
router.get("/gettasklist/:taskId", taskController.gettask);
router.put("/updatetask/:taskId", taskController.updatetask);
router.delete("/:taskId", taskController.deletetask);

module.exports = router;
