//async file functions
const { readFile, writeFile } = require('fs');
console.log('start')

//async requires a callback
readFile('./content/first.txt', 'utf-8', (err,result)=>{   //returns err and result as responses
    if(err){   //if error then kick out to the screen
        console.log(err)
        return
    }
    console.log(result)  //otherwise kick out the result

    const first = result;

    readFile('./content/second.txt','utf-8',(err,result)=>{   //returns err and result as responses
        if(err){   //if error then kick out to the screen
            console.log(err)
            return
        }
        const second = result;
    
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err,result) => {
                if (err) {
                    console.log(err)
                    return
                } 
                console.log('done with this task')
            }
        )
    })
})  

console.log('starting next task')

// alternatives to async are 'promises' and 'async await'
