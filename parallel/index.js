const {taskOne, taskTwo} = require('./tasks')

async function main (){
    try {
        console.time('Time Measuring')   
        //Parallel execution means that user does not have to wait one of the methods finish its work so both method will work parallely

        const results = await Promise.all([taskOne(), taskTwo()])

        console.timeEnd('Time Measuring')
            
        console.log('Task One: ', results[0]);
        console.log('Task One: ', results[1]);
        
    } catch (error) {
        console.log(error);        
    }
    
}

main();
