var fs=require("fs");
const { parse } = require("path/posix");
fs.writeFileSync("node/sort.txt","50 -1 99 100 20 41 0 62");
data=fs.readFileSync("node/sort.txt","utf-8");
d=data.split(" ");
console.log(d.sort((a,b)=>a-b))
let arr=[]
for(i=0;i<d.length;i++){
    arr[i]=parseInt(d[i])
}
console.log(arr)