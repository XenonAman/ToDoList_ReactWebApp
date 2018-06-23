const mongoose = require('mongoose');
const Todo = mongoose.model('task_list');
module.exports = app =>{
  // send task list to save
  app.post('/api/todo', async(req, res) =>{
    const { task, disp, time } = req.body.addtask;

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
    const getT = await Todo.find({isDeleted: false});
    res.send(getT);
  });

  // update task list to backend "Completed || Remaining"
  app.put('/api/update/?:taskid?', async (req,res) => {
    var query = null;
    const { getStat } = req.body;
    // var getStat = false;

    if (!req.params.taskid === null || !req.params.taskid === false) {
      query = { _id: req.params.taskid };
    } else {
      query = null;
    }

    var update = {
      $set: {
        done: !getStat
      }
    };

    var options = { new: true };
    Todo.findOneAndUpdate(query, update, options, function(err, getT) {
      if (err) {
        throw err;
      }
    res.send(getT);
    });
  });
};
