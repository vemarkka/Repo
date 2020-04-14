const mongoose=require("mongoose"),
{Schema}=mongoose,
userSchema=new Schema({
  name:{
    first:{
      type:String,
      trim:true
    },
    last:{
      type:String,
      trim:true
    },
    username:{
      type:String,

    }
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
  },
  zipCode:{
    type:Number,
    min:[1000,"Zip code to short"],
    max: 99999
  },
  password:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:Number
  },
  courses:[{type:Schmea.Types.ObjectId,ref:"Course"}],
  subscribedAccount:{type:Schema.Types.ObjectId,ref:"Subscriber"}
},{
  timestamps:true
});
userSchema.virtual("fullName")
.get(function(){
  return `${this.name.first}${this.name.last}`;
});

userSchema.virtual("username")
.get(function(){
  return `${this.username.first}${this.username.last}`;
});

module.exports=mongoose.model("User",userSchema);
