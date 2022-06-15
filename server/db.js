const mongoose = require('mongoose');

module.exports = async ()=>{
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        await mongoose.connect("mongodb+srv://joanjuz:clouddriveD4@cedbpd3.flaciuc.mongodb.net/cloud-drive?retryWrites=true&w=majority"
            ,connectionParams);
        console.log("Connected to database Successfully")
    }catch (error){
        console.log("could not connect to database!")
    }
}