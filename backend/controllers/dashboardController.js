const Dashboard=require("../models/dashboardModel");

const getDashboard=async(req,res)=>{

try{

const stats=await Dashboard.getDashboardStats();

res.json(stats);

}

catch(err){

console.log(err);

res.status(500).json({

message:"Server Error"

});

}

};

module.exports={

getDashboard

};