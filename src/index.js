import http from "http";


const server = http.createServer(function(req,res){
    console.log("Server Started")
    if(req.url=="/api"){
        res.write("You have entered in to the api world")
    }
    else{
        res.write("Hello World")
    }
 
    res.end();

})



server.listen(3000,()=>{
    console.log("Server up and running")
})