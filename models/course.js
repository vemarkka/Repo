const mongoose=require("mongoose");


const courseSchema= new mongoose.Schema({
  title:{
    type:String,
    required:true,
    unique: true
  },
  description:{
    type:String,
    required:true
  },
  items:[],
  zipCode:{
    type:Number,
    min: [10000,"Zip code too short"],
    max:99999
  }
});

const courseSchema = Schema({
_id: Schema.Types.ObjectId,
name: String,
number: Number,
courses:[{type:Schema.Types.ObjectId,ref:"Course"}],
subscribedAccount:{type:Schema.Types.ObjectId,ref:"Subscriber"} });


module.exports=mongoose.model("Course",courseSchema);
const Course = mongoose.model('Course', courseSchema);
