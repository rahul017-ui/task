const User = require("../model/User");
const todotask = require("../model/task");


// Get All user
const getusers = async (req, res) => {
    try {
        const users = await User.findById(req.params.userId);
        const task =await todotask.findById(user_id);
        console.log(task)

        //  res.json(users);
        
      } catch (error) {
        res.json({ message: error });
      }
};

// Single user
const getuser = async (req, res) => {
    try {
        const user = await Product.findById(req.params.userId);
        res.json(user);
      } catch (error) {
        res.json({ message: error });
      }
};

// Add New user

const taskuser  =async (req,res)=>{
  try {
    const us =new User({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      username: req.body.username,
      password: req.body.password,

    });
    const tas = new todotask({
    user_id:us._id,
      pincode: req.body.pincode,
      task: req.body.task,

    })
    const sav =await us.save();
    // res.send(sav);
    const sa = await tas.save();
    res.send(sa);
  }catch (error) {
    res.status(400).send(error);
  }
}



const createuser = async (req, res) => {
    
    
      try {
        const user = new User({
         name: req.body.name,
          email: req.body.email,
          contact: req.body.contact,
          username: req.body.username,
          password: req.body.password,
         
          });
        const saveduser = await user.save();
        res.send(saveduser);
      } catch (error) {
        res.status(400).send(error);
      }
};

// Update user
const userupdate = async (req, res) => {
    try {
        const user = {
     name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    username: req.body.username,
    password: req.body.password,
  };
    
        const updateduser = await User.findByIdAndUpdate(
          { _id: req.params.userId },
          user
        );
        res.json(updateduser);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete user
const deleteuser = async (req, res) => {
    try {
        const removeuser = await User.findByIdAndDelete(req.params.userId);
        res.json(removeuser);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
  getusers , 
    getuser, 
    createuser, 
    userupdate, 
    deleteuser,
  taskuser
  }