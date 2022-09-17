const router = require("express").Router();

const userRoute = require("../routes/User");

router.use("/api/v1/users", userRoute )


module.exports = router;