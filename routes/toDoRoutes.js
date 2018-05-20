const mongoose = require('mongoose');
const Todo = mongoose.model('task_list');
module.exports = app =>{
  app.post('/api/todo', async(req, res) =>{

    const { task, disp, time } = req.body;

    const todo = new Todo({
      task,
      disp,
      time
  //   _user: req.user.id
    });
    try {
      const mas = await todo.save();  //save data to mongoDB
      res.send(mas);  //send back the response to frontend
    } catch (err) {
      res.send("Something Wrong");
    }
  });

  // send task list to frontend
  app.get('/api/showtask', async (req,res) => {
    const getT = await Todo.find();
    res.send(getT);
  });
};
