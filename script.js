const fs = require("fs");
const _ = require("lodash");

console.log("Run with nodejs");

fs.readFile("newFile.txt","utf8", function (err, data){
    if(err) throw err;
    console.log("OK");
    console.log(data);
});

const list1 = [1, 2, 3, 4];
const list2 = [3, 4, 5, 6];
const resultList = _.union(list1, list2);
console.log(resultList);