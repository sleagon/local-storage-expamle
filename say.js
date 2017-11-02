
module.exports = function(){
    const store = require("local-storage-v8").GetStorage();
    return store.name;
}