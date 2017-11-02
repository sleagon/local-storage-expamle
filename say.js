
module.exports = function(){
    const store = require("./store")();
    return store.name;
}