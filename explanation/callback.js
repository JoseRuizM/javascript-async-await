function requestHandler(req, res){
    User.findById(req.userId, function(err,user){
        if(err){
            return res.send(err);
        }else{
            Task.findById(user.tasksId, function(err, tasks){
                if(err){
                    return res.send(err);            
                }else{
                    tasks.completed = true;
                    tasks.saved(function (err){
                        if (err) {
                            return res.send(err);
                        }else{
                            res.send('task completed')
                        }
                    });
                }
            });
        }
    });
}