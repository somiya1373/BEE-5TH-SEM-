const fs = require("fs");
console.log("start");
setTimeout(()=>{
    console.log("timer callback");
},0)
setImmediate(()=>{
    console.log("set setimmediate callback");
})
function doSomeTask(){
    return new Promise((resolve, reject)=>{
        resolve("promise chla")
    })
}
fs.readFile("demo.txt", (data) =>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2")
}, 0)
    setImmediate(()=>{
        console.log("immediate 2")
    })
})

console.log("end");
doSomeTask().then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})
process.nextTick(()=>{
    console.log("next tick");
})