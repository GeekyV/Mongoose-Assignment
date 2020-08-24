function wait(ms){
    return new Promise(function(resolve,reject){
        if(ms<=0){
            reject(new Error("cannot wait 0 sec"));
            return;
        }
        setTimeout(function(){
            resolve();
        },ms);
    });
}

wait(0).then(function(){
    console.log("we have waited 1 sec");
}).catch(function(error){
    console.log("there was an error");
})