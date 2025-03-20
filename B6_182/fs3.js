var a=require("fs")
a.writeFileSync("node/source.txt","Hello");
data=a.readFileSync("node/source.txt","utf-8")
a.writeFileSync("node/destination.txt",data)
a.appendFileSync("node/destination.txt","\nHow are you?")