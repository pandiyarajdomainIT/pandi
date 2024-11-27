const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://pandiyarajn12042003:rGdtH8V6N6YvLIia@cluster0.0mqrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})