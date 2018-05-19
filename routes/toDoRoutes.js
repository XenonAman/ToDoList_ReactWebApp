const mongoose = require('mongoose');

const Todo = mongoose.model('task_list');

module.exports = app =>{
  app.post('/api/todo', async(req, res) =>{
    const { task, disp, time } = req.body;

    const todo = new Todo({
      task:task,
      disp:disp,
      time:time
  //   _user: req.user.id
    });

    try {
      await todo.save();  //save data to mongoDB
      // res.send(req.task_list);  //send back the response to frontend
    } catch (err) {
      res.send("Something Wrong");
    }

  });
};
