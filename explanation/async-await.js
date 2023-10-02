async function requestHandler(req, res){
    try {
        const user = await User.findById(req.userId);
        const tasks = await Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
    } catch (error) {
        res.send(error);
    }
}