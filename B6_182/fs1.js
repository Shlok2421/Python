var fs=require("fs");
//fs.mkdirSync("node");
// fs.writeFileSync("node/rw.txt","Hello");
// fs.appendFileSync("node/rw.txt","\nHow are you");
// data=fs.readFileSync("node/rw.txt","utf-8");
// console.log(data);
// console.log(data.toString());
// fs.renameSync("node/rw.txt","node/write.txt");
// fs.writeFileSync("node/write.txt","Test")
fs.unlinkSync("node/write.txt")