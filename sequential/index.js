const {taskOne, taskTwo} = require('./tasks')

async function main (){
    try {
        console.time('Time Measuring')   
        //Execution of sequential code and despite one of them has issues the code will be finish the rest of the code execution
        const firstValue = await taskOne();
        const secValue = await taskTwo();
        console.timeEnd('Time Measuring')
            
        console.log('Task One: ', firstValue);
        console.log('Task One: ', secValue);
        
    } catch (error) {
        console.log(error);        
    }
    
}

main();
