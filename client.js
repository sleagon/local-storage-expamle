let rp = require("request-promise");


(function(){
    for(let k = 0; k < 10; k++){
        rp.get(`http://127.0.0.1:9922?name=${k}th`).then(data => {
            if(data !== `hello, ${k}th.`){
                throw new Error("Check failed!");
            } else {
                console.log(`${k}th done.`);
            }
        });
    }
})();