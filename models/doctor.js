const mongoose=require('mongoose');

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"]
    },

password:{
    type:String,
    required:[true, "please eneter password"],
    minLength:[6, "password should be greater than 6 character"]
}

});



const Doctor =new mongoose.model("Doctor",doctorSchema);


module.exports=Doctor;
